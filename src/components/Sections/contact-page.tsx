'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    const contacts = [
        {
            label: 'Email',
            value: 'vcsean3@gmail.com',
            href: 'mailto:vcsean3@gmail.com',
            description: 'Best for professional inquiries'
        },
        {
            label: 'LinkedIn',
            value: 'linkedin.com/in/yoshisean',
            href: 'https://linkedin.com/in/yoshisean',
            description: 'Let\'s connect professionally'
        },
        {
            label: 'GitHub',
            value: 'github.com/yoshisean',
            href: 'https://github.com/yoshisean',
            description: 'Check out my code'
        },
    ]

    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-full px-8 py-24">
            <div className="max-w-4xl w-full space-y-16">

                {/* Header */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light">
                        Get in Touch
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-70 max-w-2xl">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="space-y-4">
                    {contacts.map((contact) => (
                        <Link
                            key={contact.label}
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onMouseEnter={() => setHoveredLink(contact.label)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className="group flex flex-col md:flex-row md:items-center md:justify-between
                                      py-8 hover:opacity-50
                                     transition-all duration-200"
                        >
                            <div className="space-y-1">
                                <h2 className="text-2xl md:text-3xl font-light transition-transform duration-400
                                             group-hover:translate-x-2">
                                    {contact.label}
                                </h2>
                                <p className="text-sm md:text-base font-light opacity-50">
                                    {contact.description}
                                </p>
                            </div>
                            <p className="text-base md:text-lg font-light mt-2 md:mt-0 transition-transform
                                        duration-400 group-hover:-translate-x-2">
                                {contact.value}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="pt-8">
                    <p className="text-base md:text-lg font-light opacity-50">
                        Currently based in Atlanta, Georgia • Available for remote opportunities
                    </p>
                </div>
            </div>
        </main>
    )
}