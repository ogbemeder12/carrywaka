import AboutContent from "@/components/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - CarryWaka",
    description: "Learn about CarryWaka's mission to create the safest hyper-local delivery network in Africa.",
};

export default function About() {
    return <AboutContent />;
}
