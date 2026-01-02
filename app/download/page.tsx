"use client";

import Button from "@/components/Button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Download() {
    const container = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(cardRef.current, { scale: 0.9, opacity: 0 });

        gsap.to(cardRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)", // Nice bounce effect
        });

    }, { scope: container });

    return (
        <div ref={container} className="min-h-[80vh] flex items-center bg-bg-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div ref={cardRef} className="bg-white rounded-3xl p-12 md:p-20 shadow-xl text-center max-w-4xl mx-auto opacity-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
                        Get CarryWaka on Mobile
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        CarryWaka is available on Android. Download the app today to start sending and earning on the go.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <Button
                            href="#"
                            className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-all transform hover:scale-105"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.706 10.705L21.03 2.5a.997.997 0 00-1.166-.11l-5.549 3.129 9 9zm2.637 2.637l-9-9 5.548 3.13a1 1 0 001.166-.11l-6.714 10.02zm-12.72 6.46L14.853 11 4.232 20.612a.997.997 0 01-.622-.996z" />
                                <path fill="none" d="M0 0h24v24H0z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs">GET IT ON</div>
                                <div className="text-xl font-bold font-sans">Google Play</div>
                            </div>
                        </Button>

                        <p className="text-sm text-gray-400 mt-4">
                            * Play Store link coming soon
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
