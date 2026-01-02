import FAQContent from "@/components/FAQContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - CarryWaka",
    description: "Find answers to frequently asked questions about CarryWaka service, safety, and payments.",
};

export default function FAQ() {
    return <FAQContent />;
}
