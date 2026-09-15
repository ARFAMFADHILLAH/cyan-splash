import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  waMessage?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  waMessage,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
    secondary:
      "bg-navy-900 text-white hover:bg-navy-800 shadow-lg",
    outline:
      "border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50",
    whatsapp:
      "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/25",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={getWhatsAppUrl(waMessage)} className={classes} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
