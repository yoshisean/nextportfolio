import React, { forwardRef, useMemo } from 'react';
import { Effect } from 'postprocessing';
import { Uniform } from 'three';

const fragmentShader = `
uniform float targetAspect;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 centeredUv = uv - 0.5;
    
    // Calculate actual canvas aspect ratio
    float canvasAspect = resolution.x / resolution.y;
    
    // We want to maintain the 2.39:1 aspect ratio with letterbox bars
    float letterboxMask = 0.0;
    
    if (canvasAspect < targetAspect) {
        // Canvas is narrower/taller than target (2.39:1) - add top/bottom bars
        // This maintains the 2.39:1 ratio using the full width
        float targetHeight = canvasAspect / targetAspect;
        float verticalPos = abs(centeredUv.y);
        letterboxMask = smoothstep(targetHeight * 0.5 - 0.005, targetHeight * 0.5, verticalPos);
    } else {
        // Canvas is wider than target - add side pillars
        // This is less common with your responsive height setup
        float targetWidth = targetAspect / canvasAspect;
        float horizontalPos = abs(centeredUv.x);
        letterboxMask = smoothstep(targetWidth * 0.5 - 0.005, targetWidth * 0.5, horizontalPos);
    }
    
    // Apply letterbox mask
    vec3 finalColor = inputColor.rgb * (1.0 - letterboxMask);
    
    outputColor = vec4(finalColor, inputColor.a);
}
`;

class LetterboxEffectImpl extends Effect {
    constructor({
                    targetAspect = 2.39
                } = {}) {
        super('LetterboxEffect', fragmentShader, {
            uniforms: new Map([
                ['targetAspect', new Uniform(targetAspect)]
            ])
        });
    }

    // Allow updating the target aspect ratio if needed
    set targetAspect(value: number) {
        this.uniforms.get('targetAspect')!.value = value;
    }

    get targetAspect(): number {
        return this.uniforms.get('targetAspect')!.value;
    }
}

interface LetterboxEffectProps {
    targetAspect?: number;
}

export const LetterboxEffect = forwardRef<Effect, LetterboxEffectProps>(({
                                                                             targetAspect = 2.39
                                                                         }, ref) => {
    const effect = useMemo(
        () => new LetterboxEffectImpl({ targetAspect }),
        [targetAspect]
    );

    return <primitive ref={ref} object={effect} />;
});

LetterboxEffect.displayName = 'LetterboxEffect';