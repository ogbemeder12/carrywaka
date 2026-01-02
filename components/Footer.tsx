import Link from "next/link";
import logo from "../public/images/carrywaka-logo.jpeg";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        Company: [
            { name: "About", href: "/about" },
            { name: "Features", href: "/features" },
            { name: "Safety", href: "/safety" },
            { name: "How It Works", href: "/how-it-works" },
        ],
        Support: [
            { name: "FAQ", href: "/faq" },
            { name: "Contact", href: "/contact" },
            { name: "Download", href: "/download" },
        ],
        Legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms & Conditions", href: "/terms" },
        ],
    };

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <img src={logo.src} alt="CarryWaka Logo" className="bg-white h-16 w-16 rounded-lg" />
                            <span className="text-2xl font-bold text-primary">CarryWaka</span>
                        </Link>
                        <p className="mt-4 text-gray-400 text-sm">
                            Safe hand-to-hand delivery with people already going your way.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {links.Company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {links.Support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {links.Legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} CarryWaka™. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
