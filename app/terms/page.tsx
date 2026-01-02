"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Terms() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(headerRef.current, { y: -30, opacity: 0 });
        gsap.set(contentRef.current, { y: 20, opacity: 0 });

        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
            .to(contentRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
            }, "-=0.4");

    }, { scope: container });

    return (
        <div ref={container} className="py-20 bg-bg-soft min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 ref={headerRef} className="text-4xl font-bold text-black mb-12 text-center opacity-0">Terms & Conditions</h1>

                <div ref={contentRef} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 opacity-0 space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By downloading, accessing, or using the CarryWaka app and website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">2. Service Description</h2>
                        <p>
                            CarryWaka is a peer-to-peer delivery platform that connects Senders with Carriers who are already traveling in the same direction. We are not a traditional courier or logistics company; we act as a technology facilitator.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">3. User Obligations</h2>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>You must be at least 18 years old to use the service.</li>
                            <li>You agree to provide accurate and truthful information during verification.</li>
                            <li><strong>Senders:</strong> You must not send prohibited items (illegal goods, cash, dangerous materials).</li>
                            <li><strong>Carriers:</strong> You must deliver items safely and in the same condition they were received.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">4. Payments</h2>
                        <p>
                            Your money stays safe until the delivery is complete. After that, the sender pays the carrier directly. The carrier pays CarryWaka’s commission through the app once it reaches ₦1,000.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">5. Liability</h2>
                        <p>
                            While we verify carriers to maintain high safety standards, CarryWaka is not liable for indirect or consequential losses. Our support team will mediate disputes in accordance with our community guidelines.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">6. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-gray-100 text-sm text-gray-500">
                        Last updated: January 2026
                    </div>
                </div>
            </div>
        </div>
    );
}
