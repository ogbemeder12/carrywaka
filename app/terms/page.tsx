import TermsContent from "@/components/TermsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions - CarryWaka",
    description: "Review the Terms & Conditions for using the CarryWaka platform as a Sender or Carrier.",
};

export default function Terms() {
    return <TermsContent />;
}
