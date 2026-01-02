"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function SafetyItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex bg-white p-6 rounded-xl shadow-sm border border-gray-100 opacity-0">
            <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default function SafetyContent() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(headerRef.current, { y: -30, opacity: 0 });
        gsap.set(listRef.current?.children || [], { x: -20, opacity: 0 });
        gsap.set(footerRef.current, { y: 30, opacity: 0 });

        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
            .to(listRef.current?.children || [], {
                x: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.6,
            }, "-=0.4")
            .to(footerRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
            }, "-=0.2");

    }, { scope: container });

    return (
        <div ref={container} className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-16 opacity-0">
                    <h1 className="text-4xl font-bold text-black mb-6">Safety First</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your safety is our top priority. We&apos;ve built robust measures to trust and protection at every step.
                    </p>
                </div>

                <div ref={listRef} className="space-y-8">
                    <SafetyItem
                        title="ID-verified carriers only"
                        description="Every carrier goes through a strict identity verification process before they can accept requests."
                    />
                    <SafetyItem
                        title="Live trip monitoring"
                        description="Track your item in real-time on our map from pickup to delivery."
                    />
                    <SafetyItem
                        title="Panic button & emergency sharing"
                        description="Instant access to emergency assistance and ability to share trip details with trusted contacts."
                    />
                    <SafetyItem
                        title="In-app messaging only"
                        description="Keep all communication within the app to ensure privacy and record-keeping."
                    />
                    <SafetyItem
                        title="Admin dispute resolution"
                        description="Our dedicated support team is ready to step in and resolve any issues fairly."
                    />
                </div>

                <div ref={footerRef} className="mt-16 bg-bg-soft p-8 rounded-2xl text-center opacity-0">
                    <h2 className="text-2xl font-bold text-black mb-4">Item Rules: What NOT to Send</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        {["Cash", "Food", "Illegal items", "High-value goods", "Electronics larger than a phone"].map((item, i) => (
                            <span key={i} className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-medium border border-red-100">
                                🚫 {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
