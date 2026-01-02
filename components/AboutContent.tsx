"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutContent() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const problemRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(headerRef.current, { y: -30, opacity: 0 });
        gsap.set(problemRef.current, { scale: 0.95, opacity: 0 });
        gsap.set(gridRef.current?.children || [], { y: 30, opacity: 0 });

        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
            .to(problemRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.8,
            }, "-=0.4")
            .to(gridRef.current?.children || [], {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.6,
            }, "-=0.4");

    }, { scope: container });

    return (
        <div ref={container} className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 ref={headerRef} className="text-4xl font-bold text-black mb-12 text-center opacity-0">About CarryWaka</h1>

                <div ref={problemRef} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12 opacity-0">
                    <h2 className="text-2xl font-bold text-primary mb-6">The Problem We&apos;re Solving</h2>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        CarryWaka was created to solve one major problem:
                    </p>
                    <div className="my-8 p-6 bg-bg-soft rounded-lg border-l-4 border-primary">
                        <p className="text-2xl font-bold text-gray-900">
                            People need safe, same-area delivery — without trusting strangers.
                        </p>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Instead of dispatching random riders, CarryWaka allows senders to deliver items using verified people already going that way.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-primary text-white p-10 rounded-2xl opacity-0">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-lg opacity-90">
                            To create the safest hyper-local delivery network in Africa.
                        </p>
                    </div>

                    <div className="bg-black text-white p-10 rounded-2xl opacity-0">
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-lg opacity-90">
                            To become the most trusted community delivery platform in every city.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
