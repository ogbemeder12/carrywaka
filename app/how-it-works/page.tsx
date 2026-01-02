import HowItWorksContent from "@/components/HowItWorksContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works - CarryWaka",
    description: "Simple step-by-step guide on how to send items or earn money delivering with CarryWaka.",
};

export default function HowItWorks() {
    return <HowItWorksContent />;
}
