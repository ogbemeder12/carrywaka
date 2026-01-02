import PrivacyContent from "@/components/PrivacyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - CarryWaka",
    description: "Read our Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function Privacy() {
    return <PrivacyContent />;
}
