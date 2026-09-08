import React from "react";
import { 
  Users, 
  Boxes, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Code2
} from "lucide-react";
import { profileData } from "@/data/profile";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";

export function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-blue-400" />,
    Boxes: <Boxes className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
    Layers: <Layers className="w-5 h-5 text-purple-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />
  };

  return (
    <section id="about" className="py-24 border-t border-white/[0.06] relative bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
              <span className="text-blue-400">01 //</span>
              <span>ENGINEERING IDENTITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Building at the intersection of Full-Stack &amp; Modern AI
            </h2>
          </FadeIn>
        </div>

        {/* Narrative & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <p className="text-xl sm:text-2xl text-zinc-200 font-normal leading-relaxed">
                &ldquo;{profileData.bio}&rdquo;
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
                <p>
                  Rather than treating frontend, backend, or artificial intelligence as siloed domains, I approach systems holistically. A great user interface requires predictable server-rendered state; high-throughput APIs depend on optimized relational models and caching tiers; and modern AI features provide real utility only when tethered to deterministic tools and reliable workflows.
                </p>
                <p>
                  My work centers on writing clean, type-safe code in TypeScript, structuring decoupled backend services in Node.js, and deploying resilient applications with containerization and continuous integration.
                </p>
              </div>
            </FadeIn>

            {/* Core Interest Pillars */}
            <FadeIn direction="up" delay={0.2}>
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Key Technical Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest) => (
                    <Badge key={interest} variant="default" size="md">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Quick Technical Summary Card */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={0.25}>
              <div className="rounded-2xl border border-white/[0.1] bg-[#0c0e14] p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span>ENGINEERING_SPECS.json</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3.5 font-mono text-xs text-zinc-400">
                  <div>
                    <span className="text-zinc-500">primary_role:</span>{" "}
                    <span className="text-white">&quot;Full-Stack &amp; AI Software Engineer&quot;</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">core_stack:</span>{" "}
                    <span className="text-cyan-300">[&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot;]</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">ai_architecture:</span>{" "}
                    <span className="text-purple-300">[&quot;Autonomous Agents&quot;, &quot;RAG&quot;, &quot;Tool Calling&quot;]</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">automation:</span>{" "}
                    <span className="text-emerald-300">[&quot;n8n&quot;, &quot;Webhooks&quot;, &quot;Background Queues&quot;]</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">infrastructure:</span>{" "}
                    <span className="text-blue-300">[&quot;Docker&quot;, &quot;Linux&quot;, &quot;Nginx&quot;, &quot;Cloudflare&quot;]</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>Architecture: Modular</span>
                  <span>Type Safety: Strict</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* How I Think — Engineering Philosophy Section */}
        <div className="pt-8">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                How I Think
              </h3>
              <div className="h-px flex-1 bg-white/[0.08]" />
              <span className="text-xs font-mono text-zinc-500">
                ENGINEERING_PHILOSOPHY
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.philosophies.map((item, idx) => (
              <FadeIn key={item.title} direction="up" delay={0.05 * idx}>
                <div className="h-full p-6 rounded-2xl border border-white/[0.08] bg-[#0b0d13]/60 hover:border-white/[0.18] hover:bg-[#0d1017] transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      {iconMap[item.iconName] || <Sparkles className="w-5 h-5 text-blue-400" />}
                    </div>
                    <h4 className="text-base font-semibold text-zinc-100 group-hover:text-blue-300 transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/[0.04] text-[11px] font-mono text-zinc-600 flex items-center justify-between">
                    <span>Principle 0{idx + 1}</span>
                    <Check className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
