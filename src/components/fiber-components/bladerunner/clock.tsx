'use client'
import { useEffect, useState } from 'react'
import { Text } from '@react-three/drei'

interface LEDClockProps {
    position?: [number, number, number]
    rotation?: [number, number, number]
    scale?: number
    color?: string // LED color
    glowIntensity?: number
    fontSize?: number
    showBackground?: boolean
}

export default function LEDClock({
                                     position = [0, 0, 0],
                                     rotation = [0, 0, 0],
                                     scale = 1,
                                     color = "#ff0000",
                                     glowIntensity = 2,
                                     fontSize = 0.5,
                                     showBackground = true,
                                 }: LEDClockProps) {
    const [time, setTime] = useState('')
    const [showColon, setShowColon] = useState(true)

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const hours = now.getHours()
            const minutes = now.getMinutes()

            // Toggle colon using functional update to avoid dependency issues
            setShowColon(prev => {
                const colonChar = prev ? ':' : ' '
                const timeString = `${hours.toString().padStart(2, '0')}${colonChar}${minutes.toString().padStart(2, '0')}`
                setTime(timeString)
                return !prev // Toggle for next update
            })
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, []) // Empty dependency array - runs once on mount

    // Calculate background dimensions based on text length
    const textLength = time.length
    const backgroundWidth = textLength * fontSize * 0.7
    const backgroundHeight = fontSize * 1.5

    return (
        <group position={position} rotation={rotation} scale={scale}>
            {/* Background panel */}
            {showBackground && (
                <mesh position={[0, 0, -0.05]}>
                    <planeGeometry args={[backgroundWidth, backgroundHeight]} />
                    <meshStandardMaterial
                        color="#3b3939"
                        metalness={0.6}
                        roughness={0.1}
                    />
                </mesh>
            )}

            {/* LED Text */}
            <Text
                fontSize={fontSize}
                color={color}
                anchorX="center"
                anchorY="middle"
                font="/DS-Digital/DS-DIGI.ttf"
                letterSpacing={0.05}
            >
                {time}
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={glowIntensity}
                    toneMapped={false}
                />
            </Text>
        </group>
    )
}