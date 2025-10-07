'use client'
import * as THREE from 'three'
import {useRef, useMemo} from 'react'
import {useFrame} from '@react-three/fiber'

/* ---------- GLSL Shaders ---------- */
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// helper GLSL: Voronoi noise
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

  // Voronoi with distance to closest AND second-closest point
  vec2 voronoi(vec2 x) {
    vec2 n = floor(x);
    vec2 f = fract(x);
    
    float minDist1 = 8.0;
    float minDist2 = 8.0;
    
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 o = hash(n + g);
        o = 0.5 + 0.5 * sin(6.2831 * o);
        
        vec2 r = g + o - f;
        float d = dot(r, r);
        
        if (d < minDist1) {
          minDist2 = minDist1;
          minDist1 = d;
        } else if (d < minDist2) {
          minDist2 = d;
        }
      }
    }
    
    return vec2(sqrt(minDist1), sqrt(minDist2));
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
    vec2 c = voronoi(uv);
    float edge = c.y - c.x;
    
    // Create bright caustic lines at cell boundaries
    float caustic = 1.0 - smoothstep(0.0, 0.1, edge);
    
    // Add some variation along the edges
    float edgeNoise = sin(c.x * 30.0 + uTime * 2.0) * 0.5 + 0.5;
    caustic *= 0.7 + 0.3 * edgeNoise;
    
    caustic = pow(caustic, 0.3);
    
    // Apply color - keep color at full brightness
    vec3 color = uColor * uIntensity;
    
    // Use caustic value ONLY for alpha
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