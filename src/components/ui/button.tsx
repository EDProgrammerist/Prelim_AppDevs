import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

const VARIANT_STYLES = {
  primary: "bg-black text-white hover:bg-gray-800 disabled:hover:bg-black",
  secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 disabled:hover:bg-white",
  tertiary: "bg-transparent text-blue-600 hover:underline px-0 py-0 rounded-none",
} as const;

export function Button({ children, variant = "primary", className = "", disabled, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "cursor-pointer inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900",
        "px-4 py-1.5 rounded-lg text-sm disabled:cursor-not-allowed disabled:opacity-50",
        VARIANT_STYLES[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}