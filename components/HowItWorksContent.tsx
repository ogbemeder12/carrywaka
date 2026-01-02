"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HowItWorksContent() {
    const container = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const stepsContainerRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            title: "Create a delivery request",
            description: "Enter pickup and drop-off details in the app.",
        },
        {
            title: "Matched with nearby verified carriers",
            description: "Our system finds a carrier already heading your way.",
        },
        {
            title: "Pickup verification",
            description: "Carrier takes a photo and proof of pickup is timestamped.",
        },
        {
            title: "Live tracking begins",
            description: "Follow your item's journey in real-time.",
        },
        {
            title: "Receiver provides OTP",
            description: "Secure delivery confirmation with a unique One-Time Password.",
        },
        {
            title: "Carrier is paid automatically",
            description: "Funds are released only after successful delivery.",
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(titleRef.current, { y: -30, opacity: 0 });
        gsap.set(stepsContainerRef.current?.children || [], { y: 50, opacity: 0 });

        tl.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
            .to(stepsContainerRef.current?.children || [], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
            }, "-=0.4");

    }, { scope: container });

    return (
        <div ref={container} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 ref={titleRef} className="text-4xl font-bold text-black mb-16 text-center opacity-0">How It Works</h1>

                <div className="relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                    <div ref={stepsContainerRef} className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} opacity-0`}>
                                <div className="w-full md:w-1/2">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white text-xl font-bold mb-4 shadow-md z-10 relative">
                                            {index + 1}
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary transition-colors w-full">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
