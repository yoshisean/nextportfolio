'use client'
import * as THREE from 'three'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

/* ---------- GLSL Shaders ---------- */
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform float uScale;
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec2 vUv;

  // Pseudo-random hash
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)),
             dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  // Simple 2D noise for domain warping
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = dot(hash(i), vec2(1.0));
    float b = dot(hash(i + vec2(1.0, 0.0)), vec2(1.0));
    float c = dot(hash(i + vec2(0.0, 1.0)), vec2(1.0));
    float d = dot(hash(i + vec2(1.0, 1.0)), vec2(1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

vec3 voronoi(vec2 value) {
    vec2 baseCell = floor(value);
    vec2 f = fract(value);
    
    // First pass: find closest cell
    float minDist1 = 8.0;
    float minDist2 = 8.0;
    vec2 toClosestCell;
    vec2 closestCell;
    
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 cell = baseCell + g;
        vec2 o = hash(cell);
        o = 0.5 + 0.5 * sin(6.2831 * o);
        
        // CHANGED: Gentler oscillation with unique seed per cell
        vec2 cellHash = hash(cell + vec2(100.0, 200.0));  // Different seed
        float angle = uTime * 0.3 + cellHash.x * 6.2831;
        vec2 oscillation = vec2(cos(angle), sin(angle)) * 0.08;  // Smaller radius
        o += oscillation;
        
        vec2 cellPosition = g + o;
        vec2 toCell = cellPosition - f;
        float d = dot(toCell, toCell);
        
        if (d < minDist1) {
          minDist2 = minDist1;
          minDist1 = d;
          closestCell = cell;
          toClosestCell = toCell;
        } else if (d < minDist2) {
          minDist2 = d;
        }
      }
    }
    
    // Second pass: find distance to closest edge
    float minEdgeDistance = 8.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 cell = baseCell + g;
        vec2 o = hash(cell);
        o = 0.5 + 0.5 * sin(6.2831 * o);
        
        // CHANGED: Same gentler oscillation
        vec2 cellHash = hash(cell + vec2(100.0, 200.0));
        float angle = uTime * 0.3 + cellHash.x * 6.2831;
        vec2 oscillation = vec2(cos(angle), sin(angle)) * 0.09;
        o += oscillation;
        
        vec2 cellPosition = g + o;
        vec2 toCell = cellPosition - f;
        
        vec2 diffToClosestCell = abs(closestCell - cell);
        bool isClosestCell = diffToClosestCell.x + diffToClosestCell.y < 0.1;
        
        if (!isClosestCell) {
          vec2 toCenter = (toClosestCell + toCell) * 0.5;
          vec2 cellDifference = normalize(toCell - toClosestCell);
          float edgeDistance = dot(toCenter, cellDifference);
          minEdgeDistance = min(minEdgeDistance, edgeDistance);
        }
      }
    }
    
    return vec3(sqrt(minDist1), sqrt(minDist2), minEdgeDistance);
}

  void main() {
    vec2 uv = vUv * uScale;
    
    // Domain warping - distort the space itself over time
    float warpStrength = 0.1;
    vec2 warp = vec2(
      noise(uv + uTime * 2.0),
      noise(uv + uTime * 2.0 + 100.0)
    );
    uv += warp * warpStrength;
    
    // Scroll the pattern
    uv.y += uTime * 0.3;
    uv.x += uTime * 0.1;
    
    // Get Voronoi distances
    vec3 c = voronoi(uv);
    // CHANGED: Use the proper edge distance (third component) instead of difference
    float edge = c.z;  // Was: c.y - c.x
    
    // Create bright caustic lines at cell boundaries
    float caustic = 1.0 - smoothstep(0.0, 0.075, edge);
    
    // Add some variation along the edges
    float edgeNoise = sin(c.x * 30.0 + uTime * 2.0) * 0.5 + 0.5;
    caustic *= 0.7 + 0.3 * edgeNoise;
    
    caustic = pow(caustic, 0.3);
    
    vec3 color = uColor * uIntensity;
    
    float alpha = caustic;
    
    // Boost alpha to make dim areas more transparent
    alpha = pow(alpha, 1.5);
    
    gl_FragColor = vec4(color, alpha);
  }
`

export default function VoronoiLayer({
                                         scale,
                                         color,
                                         intensity,
                                         timeMultiplier = 1,
                                         position = [0, 0, 0],
                                         rotation = [-Math.PI / 2, 0, 0],
                                         size,
                                         opacity = 0.25,
                                     }: {
    scale: number
    color: [number, number, number]
    intensity: number
    timeMultiplier?: number
    position?: [number, number, number]
    rotation?: [number, number, number]
    size: [number, number]
    opacity?: number
}) {
    const mat = useRef<THREE.ShaderMaterial>(null)
    const uniforms = useRef({
        uTime: { value: 0 },
        uScale: { value: scale },
        uColor: { value: new THREE.Color(...color) },
        uIntensity: { value: intensity },
    }).current

    useFrame(({ clock }) => {
        if (!mat.current) return
        mat.current.uniforms.uTime.value = clock.getElapsedTime() * timeMultiplier
    })

    return (
        <mesh rotation={rotation} position={position}>
            <planeGeometry args={size} />
            <shaderMaterial
                ref={mat}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                opacity={opacity}
            />
        </mesh>
    )
}