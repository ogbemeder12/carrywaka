import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    type = "button",
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-200";

    const variants = {
        primary: "bg-primary text-white hover:bg-accent",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-gray-50",
        outline: "bg-transparent text-white border-2 border-white hover:bg-white/10",
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles}>
            {children}
        </button>
    );
}
