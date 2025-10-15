import React, { forwardRef, useMemo } from 'react';
import { Effect } from 'postprocessing';
import { Uniform } from 'three';

const fragmentShader = `
uniform float targetAspect;
uniform float vignette;
uniform float vignetteStrength;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 centeredUv = uv - 0.5;
    
    // Calculate actual screen aspect ratio
    float screenAspect = resolution.x / resolution.y;
    
    // Determine letterbox strategy based on screen shape
    float letterboxMask = 0.0;
    
    if (screenAspect > targetAspect) {
        // Screen is wider than target - add side pillars
        float targetWidth = targetAspect / screenAspect;
        float horizontalPos = abs(centeredUv.x);
        letterboxMask = smoothstep(targetWidth * 0.5 - 0.01, targetWidth * 0.5, horizontalPos);
    } else {
        // Screen is taller than target - add top/bottom bars
        float targetHeight = screenAspect / targetAspect;
        float verticalPos = abs(centeredUv.y);
        letterboxMask = smoothstep(targetHeight * 0.5 - 0.01, targetHeight * 0.5, verticalPos);
    }
    
    // Calculate vignette
    float dist = length(centeredUv * vec2(screenAspect, 1.0));
    float vignetteMask = 1.0 - smoothstep(vignette, vignette + 0.5, dist);
    vignetteMask = mix(1.0, vignetteMask, vignetteStrength);
    
    // Combine masks
    vec3 finalColor = inputColor.rgb * vignetteMask * (1.0 - letterboxMask);
    
    outputColor = vec4(finalColor, inputColor.a);
}
`;

class LetterboxEffectImpl extends Effect {
    constructor({
                    targetAspect = 2.39,
                    vignette = 0.6,
                    vignetteStrength = 0.5
                } = {}) {
        super('LetterboxEffect', fragmentShader, {
            uniforms: new Map([
                ['targetAspect', new Uniform(targetAspect)],
                ['vignette', new Uniform(vignette)],
                ['vignetteStrength', new Uniform(vignetteStrength)]
            ])
        });
    }
}

interface LetterboxEffectProps {
    targetAspect?: number;
    vignette?: number;
    vignetteStrength?: number;
}

export const LetterboxEffect = forwardRef<Effect, LetterboxEffectProps>(({
                                                                             targetAspect = 2.39,
                                                                             vignette = 0.6,
                                                                             vignetteStrength = 0.5
                                                                         }, ref) => {
    const effect = useMemo(
        () => new LetterboxEffectImpl({ targetAspect, vignette, vignetteStrength }),
        [targetAspect, vignette, vignetteStrength]
    );

    return <primitive ref={ref} object={effect} />;
});

LetterboxEffect.displayName = 'LetterboxEffect';