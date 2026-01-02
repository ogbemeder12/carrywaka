"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FeaturesContent() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const features = [
        { title: "Verified Carriers", icon: "🛡️" },
        { title: "Route-Based Matching", icon: "🗺️" },
        { title: "Live Tracking", icon: "📍" },
        { title: "OTP Proof-of-Delivery", icon: "🔐" },
        { title: "Payments", icon: "💰" },
        { title: "In-App Chat", icon: "💬" },
        { title: "Safety Tools", icon: "🚨" },
        { title: "Trust Scores & Ratings", icon: "⭐" },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(headerRef.current, { y: -30, opacity: 0 });
        gsap.set(gridRef.current?.children || [], { y: 30, opacity: 0, scale: 0.9 });

        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
            .to(gridRef.current?.children || [], {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
            }, "-=0.4");

    }, { scope: container });

    return (
        <div ref={container} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-16 opacity-0">
                    <h1 className="text-4xl font-bold text-black mb-4">Platform Features</h1>
                    <p className="text-xl text-gray-600">Everything you need for safe and secure delivery.</p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary transition-colors text-center group opacity-0">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
