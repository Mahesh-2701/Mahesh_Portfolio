"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web Application",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulated client-side submission state
    // Ready for integration with Resend, Formspree, or Next.js Route Handler /api/contact
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.06] bg-[#07080d] relative overflow-hidden">
      
      {/* Subtle radial glow */}
      <div 
        className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-[140px] rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct CTA & Contact Information */}
          <div className="lg:col-span-6 space-y-8">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
                <span className="text-blue-400">09 //</span>
                <span>COLLABORATION &amp; CONTACT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Have an idea worth building?
              </h2>
              <p className="text-lg sm:text-xl text-zinc-300 mt-4 leading-relaxed">
                Let’s turn it into a reliable, scalable product.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="space-y-4 pt-2">
                
                {/* Email Copy Card */}
                <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0b0e16] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-400">Direct Email</div>
                      <div className="text-sm font-semibold text-white font-mono mt-0.5">
                        {profileData.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Social Connect Options */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-white/[0.08] bg-[#0b0e16] hover:border-white/[0.18] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-xs font-mono text-zinc-300 group-hover:text-white">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-white/[0.08] bg-[#0b0e16] hover:border-white/[0.18] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-xs font-mono text-zinc-300 group-hover:text-white">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </a>
                </div>

                {/* Current Status Pill */}
                <div className="p-4 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>{profileData.status.message}</span>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Inquiry Form UI */}
          <div className="lg:col-span-6">
            <FadeIn direction="up" delay={0.15}>
              <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.1] bg-[#0a0d15] shadow-2xl space-y-6">
                
                <div className="border-b border-white/[0.08] pb-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Start a Technical Conversation
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Send a brief regarding your product architecture, AI integration, or engineering project.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-500/[0.05] border border-emerald-500/20 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Message Dispatched
                    </h4>
                    <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. I’ll review your technical specifications and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-blue-400 hover:underline pt-2 inline-block"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-zinc-400 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          placeholder="Linus Torvalds"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-sans placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-zinc-400 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="linus@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-sans placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 block">
                        Project Scope / Inquiry Type
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) =>
                          setFormState({ ...formState, projectType: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0d101a] border border-white/[0.08] text-white text-xs font-sans focus:outline-none focus:border-blue-500/60 transition-colors"
                      >
                        <option value="Full-Stack Web Application">Full-Stack Web Application (Next.js/Node)</option>
                        <option value="AI Agents & RAG System">AI Agents &amp; RAG Systems</option>
                        <option value="Workflow Automation (n8n/Webhooks)">Workflow Automation (n8n/Webhooks)</option>
                        <option value="System Architecture & Scalability Consulting">System Architecture &amp; Scalability</option>
                        <option value="Engineering Role Inquiry">Full-Time / Contract Engineering Role</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 block">
                        Project Specifications &amp; Requirements
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="Describe what you want to architect or build, key milestones, and timeline..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-sans placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={submitting}
                        variant="primary"
                        className="w-full flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{submitting ? "Transmitting..." : "Send Message"}</span>
                      </Button>
                    </div>

                    <p className="text-[10px] font-mono text-zinc-500 text-center pt-1">
                      Ready to wire to your preferred provider (Resend, Formspree, or /api/contact route).
                    </p>
                  </form>
                )}

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
