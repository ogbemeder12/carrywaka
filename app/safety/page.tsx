import SafetyContent from "@/components/SafetyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Safety - CarryWaka",
    description: "Your safety is our priority. Verified carriers, live tracking, and secure payments.",
};

export default function Safety() {
    return <SafetyContent />;
}
