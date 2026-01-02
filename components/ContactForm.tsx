"use client";

import { useState, FormEvent, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactForm() {
    const container = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useGSAP(() => {
        gsap.set(container.current, { y: 30 }); // Ensure initial transform
        gsap.to(container.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
        });
    }, { scope: container });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div ref={container} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto opacity-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>

            {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center animate-fade-in">
                    <div className="mb-4 text-4xl">✅</div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you shortly.</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 text-primary hover:text-accent font-medium text-sm"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700 block">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                            placeholder="How can we help?"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                            placeholder="Tell us more..."
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <Button type="submit" variant="primary" className={`w-full md:w-auto min-w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}>
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}
