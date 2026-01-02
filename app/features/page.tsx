import FeaturesContent from "@/components/FeaturesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features - CarryWaka",
    description: "Explore CarryWaka features: Verified Carriers, Live Tracking, Escrow Payments, and more.",
};

export default function Features() {
    return <FeaturesContent />;
}
