"use client";

import React, { useEffect, useState } from "react";
import { 
  Search, 
  Terminal, 
  FolderGit2, 
  Cpu, 
  Layers, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink,
  X,
  Code2,
  Download
} from "lucide-react";
import { profileData } from "@/data/profile";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery("");
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const navActions = [
    { label: "Jump to Hero", href: "#hero", icon: Code2, category: "Navigation" },
    { label: "Jump to Projects", href: "#projects", icon: FolderGit2, category: "Navigation" },
    { label: "Jump to Engineering & Architecture", href: "#engineering", icon: Layers, category: "Navigation" },
    { label: "Jump to AI Systems", href: "#ai", icon: Cpu, category: "Navigation" },
    { label: "Jump to Interactive Terminal", href: "#terminal", icon: Terminal, category: "Navigation" },
    { label: "Jump to Experience", href: "#experience", icon: Layers, category: "Navigation" },
    { label: "Jump to Contact", href: "#contact", icon: Mail, category: "Navigation" }
  ];

  const filteredNav = navActions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0d1017] shadow-2xl overflow-hidden text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3 border-b border-white/[0.08] gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search sections (e.g. AI, projects, email)..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {/* Quick Actions */}
          <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Actions
          </div>
          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-white/[0.08] text-zinc-200 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Copy Email Address ({profileData.email})</span>
            </div>
            {copied ? (
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                <Check className="w-3.5 h-3.5" /> Copied
              </span>
            ) : (
              <span className="text-xs text-zinc-500 font-mono">
                <Copy className="w-3.5 h-3.5" />
              </span>
            )}
          </button>

          <a
            href={profileData.resumeUrl}
            download="Mahi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-blue-500/10 hover:text-blue-300 text-blue-400 font-medium transition-colors text-left border border-blue-500/20 my-1"
          >
            <div className="flex items-center gap-2.5">
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Resume (PDF)</span>
            </div>
            <span className="text-xs font-mono text-blue-400">PDF</span>
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-white/[0.08] text-zinc-200 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <FolderGit2 className="w-4 h-4 text-zinc-400" />
              <span>Open GitHub Profile (@Mahesh-2701)</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </a>

          {/* Navigation Items */}
          <div className="px-2 pt-3 pb-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Navigation
          </div>
          {filteredNav.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2 text-sm rounded-lg hover:bg-white/[0.08] text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-zinc-400" />
                  <span>{item.label}</span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">{item.href}</span>
              </a>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-black/40 text-[11px] font-mono text-zinc-500">
          <span>Navigate with mouse or Tab</span>
          <span>ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
