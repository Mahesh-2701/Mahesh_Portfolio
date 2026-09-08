import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06070a] pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-zinc-100 font-mono font-semibold text-lg">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              <span>Mahi</span>
              <span className="text-zinc-500 font-normal text-xs">{"// Systems & AI Engineer"}</span>
            </div>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
              Full-Stack Developer focused on AI-powered products, scalable web applications, automation, and modern software architecture.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Production Status: Operational
              </span>
              <span>&bull;</span>
              <span>Next.js 16 App Router</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-zinc-100 transition-colors">
                  About &amp; Principles
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-zinc-100 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#engineering" className="hover:text-zinc-100 transition-colors">
                  System Architecture
                </Link>
              </li>
              <li>
                <Link href="#ai" className="hover:text-zinc-100 transition-colors">
                  AI Engineering
                </Link>
              </li>
              <li>
                <Link href="#terminal" className="hover:text-zinc-100 transition-colors">
                  Interactive CLI
                </Link>
              </li>
              <li>
                <a
                  href={profileData.resumeUrl}
                  download="Mahi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-xs inline-flex items-center gap-1"
                >
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profileData.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mahi. Built with Next.js, TypeScript, &amp; Tailwind.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-zinc-400">
              <Terminal className="w-3.5 h-3.5" /> Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">⌘K</kbd> for quick menu
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
