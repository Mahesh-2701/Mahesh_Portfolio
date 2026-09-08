"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Command, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { CommandMenu } from "./CommandMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Engineering", href: "#engineering" },
    { label: "AI Systems", href: "#ai" },
    { label: "Terminal", href: "#terminal" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-2.5 bg-[#060709]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Live status */}
          <div className="flex items-center gap-3">
            <Link
              href="#hero"
              className="flex items-center gap-2 text-zinc-100 font-mono font-semibold tracking-tight hover:text-white group"
            >
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" />
              <span>mahi<span className="text-blue-400">.dev</span></span>
            </Link>

            {/* Status indicator */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for engineering roles</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#0c0e14]/60 backdrop-blur-md px-3 py-1 text-sm font-sans text-zinc-400">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1 rounded-full hover:text-zinc-100 hover:bg-white/[0.05] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Socials */}
          <div className="flex items-center gap-2">
            {/* Command palette trigger */}
            <button
              onClick={() => setCmdOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-zinc-400 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:text-zinc-200 transition-colors"
              title="Open Command Palette (⌘K)"
            >
              <Command className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">⌘K</span>
            </button>

            {/* Resume Download Action */}
            <a
              href={profileData.resumeUrl}
              download="Mahi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium text-blue-400 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all shadow-[0_0_12px_rgba(59,130,246,0.15)]"
              title="Download Resume (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-[#090b10] px-4 py-4 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <a
              href={profileData.resumeUrl}
              download="Mahi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm text-blue-400 font-medium bg-blue-500/10 border border-blue-500/20 rounded-lg transition-colors"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume (PDF)</span>
              </span>
              <span className="text-xs font-mono text-blue-300">PDF</span>
            </a>

            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Mahi • Full-Stack & AI</span>
              <span className="text-emerald-400">● Available</span>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandMenu isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
