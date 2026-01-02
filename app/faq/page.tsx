"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FAQ() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const faqs = [
        {
            question: "Is CarryWaka a dispatch company?",
            answer: "No. We match senders with verified people already traveling your route.",
        },
        {
            question: "How fast are deliveries?",
            answer: "Most deliveries are completed same day because carriers are already on the move.",
        },
        {
            question: "What if my item is lost?",
            answer: "All trips are tracked and reviewed. We have safety measures in place including escrow payments and comprehensive carrier verification.",
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(headerRef.current, { y: -30, opacity: 0 });
        gsap.set(listRef.current?.children || [], { y: 30, opacity: 0 });

        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
            .to(listRef.current?.children || [], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
            }, "-=0.4");

    }, { scope: container });

    return (
        <div ref={container} className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-16 opacity-0">
                    <h1 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600">Got questions? We&apos;ve got answers.</p>
                </div>

                <div ref={listRef} className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 opacity-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
