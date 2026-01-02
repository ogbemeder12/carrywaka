"use client";

import Button from "@/components/Button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HomeContent() {
    const preloader = useRef<HTMLDivElement>(null);
    const preloaderText = useRef<HTMLHeadingElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const heroTitle = useRef<HTMLHeadingElement>(null);
    const heroText = useRef<HTMLParagraphElement>(null);
    const heroButtons = useRef<HTMLDivElement>(null);
    const sectionHeader = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const benefits = [
        {
            title: "Verified carriers only",
            description: "No random riders. We verify every carrier.",
        },
        {
            title: "Hyper-local matching",
            description: "Match with people already going your way.",
        },
        {
            title: "OTP delivery system",
            description: "No delivery, no payout. Secure confirmation.",
        },
        {
            title: "payments",
            description: "Your money stays safe until the delivery is complete. After that, the sender pays the carrier directly. The carrier pays CarryWaka’s commission through the app once it reaches ₦1,000.",
        },
        {
            title: "Live tracking",
            description: "See your delivery in real time on the map.",
        },
        {
            title: "Safety tools",
            description: "Panic button, trip sharing, and 24/7 support.",
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial states
        gsap.set([heroTitle.current, heroText.current, heroButtons.current, sectionHeader.current], { y: 50, opacity: 0 });
        gsap.set(preloaderText.current, { opacity: 0, y: 20 });

        // Preloader Sequence
        tl.to(preloaderText.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
        })
            .to(preloaderText.current, {
                opacity: 0,
                y: -20,
                duration: 0.4,
                delay: 0.5,
            })
            .to(preloader.current, {
                y: "-100%",
                duration: 1,
                ease: "power4.inOut"
            });

        // Hero Sequence (starts after preloader moves)
        tl.to(heroTitle.current, {
            y: 0,
            opacity: 1,
            duration: 1,
        }, "-=0.5") // Overlap slightly with preloader exit
            .to(heroText.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
            }, "-=0.6")
            .to(heroButtons.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
            }, "-=0.4");

        // Animate Why CarryWaka Header
        // NOTE: Removed scrollTrigger to prevent errors (plugin not registered). Using delay.
        gsap.to(sectionHeader.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 2.5,
        });

        // Cards
        // NOTE: Removed scrollTrigger to prevent errors.
        gsap.fromTo(cardsRef.current?.children || [],
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                delay: 2.8,
                ease: "power2.out",
            }
        );

    }, { scope: container });

    return (
        <div ref={container} className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Preloader */}
            <div ref={preloader} className="fixed inset-0 bg-primary z-50 flex items-center justify-center">
                <h1 ref={preloaderText} className="text-white text-5xl md:text-7xl font-bold tracking-tighter">
                    CarryWaka
                </h1>
            </div>

            {/* Hero Section */}
            <section className="bg-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 ref={heroTitle} className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6 opacity-0">
                        Deliver Smarter. <span className="text-primary">Carry Safer.</span>
                    </h1>
                    <p ref={heroText} className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 opacity-0">
                        CarryWaka connects you to verified people already traveling your route — making same-area delivery safer, faster, and more affordable.
                    </p>
                    <div ref={heroButtons} className="flex flex-col sm:flex-row justify-center gap-4 opacity-0">
                        <Button href="/download" variant="primary" className="text-lg px-8 py-4">
                            Download App
                        </Button>
                        <Button href="/how-it-works" variant="secondary" className="text-lg px-8 py-4">
                            Learn How It Works
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why CarryWaka Section */}
            <section className="bg-bg-soft py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={sectionHeader} className="text-center mb-16 opacity-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why CarryWaka?</h2>
                        <p className="text-xl text-gray-600">The safest way to send items within your city.</p>
                    </div>

                    <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                    <div className="h-6 w-6 bg-primary rounded-full"></div>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
