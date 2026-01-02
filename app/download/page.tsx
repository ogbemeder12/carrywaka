import DownloadContent from "@/components/DownloadContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Download App - CarryWaka",
    description: "Download CarryWaka on Android to start sending items or earning money on your commute.",
};

export default function Download() {
    return <DownloadContent />;
}
