import React, { useState, useEffect } from 'react'
import SplitWord from "@/components/fiber-components/text/split-word";

export default function NameText() {
    const [index, setIndex] = useState(0)
    const words = [
        'SEAN YOSHIHARA',
        'DEVELOPER',
        'DESIGNER',
    ]

    useEffect(() => {
        const id = setInterval(() => setIndex(i => (i + 1) % words.length), 5000)
        return () => clearInterval(id)
    }, [words.length])

    return <SplitWord word={words[index]} />
}
