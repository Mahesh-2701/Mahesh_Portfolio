import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-blue-400/30 hover:border-blue-300/60 active:scale-[0.98]",
    secondary:
      "bg-white/[0.08] hover:bg-white/[0.12] text-zinc-100 font-medium border border-white/[0.1] hover:border-white/[0.2] active:scale-[0.98]",
    outline:
      "bg-transparent hover:bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.15] hover:border-white/[0.3] active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-white/[0.06] text-zinc-400 hover:text-zinc-100 active:scale-[0.98]"
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-sans transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
