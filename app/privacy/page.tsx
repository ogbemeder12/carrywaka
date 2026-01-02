"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Privacy() {
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
                <h1 ref={headerRef} className="text-4xl font-bold text-black mb-12 text-center opacity-0">Privacy Policy</h1>

                <div ref={contentRef} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 opacity-0 space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
                        <p>
                            Welcome to CarryWaka. We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Personal Identification:</strong> Name, email address, phone number, and government-issued ID (for verification).</li>
                            <li><strong>Location Data:</strong> Real-time location data is collected to match Carriers with Senders and to track deliveries.</li>
                            <li><strong>Transaction Data:</strong> Details about payments, escrow transactions, and delivery history.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Data</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Facilitate deliveries and match users based on routes.</li>
                            <li>Verify identities to ensure the safety of our community.</li>
                            <li>Process secure escrow payments and payouts.</li>
                            <li>Communicate important updates and support messages.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">4. Data Sharing & Security</h2>
                        <p>
                            We do not sell your personal data. We only share necessary information (like name and photo) with the other party in a matched delivery to facilitate the service. We employ industry-standard encryption and security measures to protect your data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@carrywaka.com" className="text-primary hover:underline">support@carrywaka.com</a>.
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
