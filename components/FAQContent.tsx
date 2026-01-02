"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(answerRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });
        } else {
            gsap.to(answerRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [isOpen]);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {question}
                </span>
                <span className={`transform transition-transform duration-300 text-primary ${isOpen ? "rotate-180" : ""}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div ref={answerRef} className="h-0 opacity-0 overflow-hidden">
                <p className="pb-5 text-gray-600 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default function FAQContent() {
    const container = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const categoriesRef = useRef<HTMLDivElement>(null);

    // Grouped FAQ Data
    const faqCategories = [
        {
            title: "General",
            questions: [
                {
                    question: "Is CarryWaka a dispatch company?",
                    answer: "No. We correspond senders with verified people already traveling the same route. We are a technology platform that facilitates community-based delivery.",
                },
                {
                    question: "How do I sign up?",
                    answer: "You can download the CarryWaka app from the Google Play Store. Once installed, simply create an account as a Sender or Carrier using your mobile number.",
                },
                {
                    question: "Is the service available everywhere?",
                    answer: "CarryWaka currently operates in select major cities. We are rapidly expanding to more locations. Check the app to see if your area is covered.",
                },
            ],
        },
        {
            title: "Safety & Trust",
            questions: [
                {
                    question: "How do I know my item is safe?",
                    answer: "Safety is our top priority. All carriers undergo strict ID verification. We also provide real-time tracking, a panic button, and OTP confirmation to ensuring your item reaches the right person safely.",
                },
                {
                    question: "What happens if an item is lost?",
                    answer: "While extremely rare, all trips are monitored. We have comprehensive support and dispute resolution processes. Verified carriers are held accountable for the items they transport.",
                },
                {
                    question: "Can I trust the carrier?",
                    answer: "Yes. Every carrier on CarryWaka is verified with a government-issued ID. You can also view their profile, ratings, and reviews from other users before accepting a match.",
                },
            ],
        },
        {
            title: "Payments & Delivery",
            questions: [
                {
                    question: "How fast are deliveries?",
                    answer: "Since carriers are already moving on that route, most deliveries are completed within hours—often much faster than traditional courier services.",
                },
                {
                    question: "How do payments work?",
                    answer: "Your money stays safe until the delivery is complete. After that, the sender pays the carrier directly. The carrier pays CarryWaka’s commission through the app once it reaches ₦1,000.",
                },
                {
                    question: "What items can I send?",
                    answer: "You can send most everyday items like packages, documents, electronics (small), and gifts. However, we strictly prohibit illegal goods, cash, weapons, and hazardous materials.",
                },
            ],
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(headerRef.current, { y: -30, opacity: 0 });
        gsap.set(categoriesRef.current?.children || [], { y: 30, opacity: 0 });

        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
            .to(categoriesRef.current?.children || [], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
            }, "-=0.4");

    }, { scope: container });

    return (
        <div ref={container} className="py-20 bg-bg-soft min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 ref={headerRef} className="text-4xl font-bold text-black mb-4 opacity-0">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600">Everything you need to know about CarryWaka.</p>
                </div>

                {/* Categories */}
                <div ref={categoriesRef} className="space-y-12">
                    {faqCategories.map((category, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden opacity-0">
                            <div className="bg-gray-50 px-8 py-4 border-b border-gray-100">
                                <h2 className="text-xl font-bold text-primary">{category.title}</h2>
                            </div>
                            <div className="p-8 pt-2">
                                {category.questions.map((q, qIdx) => (
                                    <FAQItem key={qIdx} question={q.question} answer={q.answer} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
