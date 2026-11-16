"use client";

import React from "react";
import { Terminal, Brain, Cpu, Sparkles, Compass, Rocket, BookOpen } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  const pillars = [
    {
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description:
        "Building predictive models and deep learning pipelines with PyTorch, scikit-learn, and Pandas. Exploring neural feature extractors and practical data science.",
      color: "text-[#bd93f9]",
      borderColor: "border-[#bd93f9]/30",
      bgColor: "bg-[#bd93f9]/10",
    },
    {
      icon: Cpu,
      title: "Systems & Low-Level C",
      description:
        "Developing an intimate understanding of memory management, pointer arithmetic, data structures, and computer architecture through pure C and Linux.",
      color: "text-[#50fa7b]",
      borderColor: "border-[#50fa7b]/30",
      bgColor: "bg-[#50fa7b]/10",
    },
    {
      icon: Rocket,
      title: "Modern Web & Product Execution",
      description:
        "Bridging algorithms to user interfaces with TypeScript, Next.js, and Tailwind CSS. Crafting interactive, accessible, and performant user experiences.",
      color: "text-[#8be9fd]",
      borderColor: "border-[#8be9fd]/30",
      bgColor: "bg-[#8be9fd]/10",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#bd93f9]/30 text-xs font-mono text-[#bd93f9]">
          <Terminal className="w-3.5 h-3.5" />
          <span>01. ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering Intelligence, <span className="text-gradient">From Hardware to Neurons</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          A glimpse into my academic background, programming philosophy, and what drives my journey in computer engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Story & University Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-2xl bg-[#131926]/90 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#50fa7b]" />
              <span>The Journey So Far</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a first-year student studying <strong className="text-white">AI and Computer Engineering</strong> at{" "}
              <strong className="text-[#bd93f9]">Tongmyong University in Busan, South Korea</strong>. My goal is to understand
              how computing works from the ground up — not just relying on high-level abstractions, but grasping how silicon, memory,
              and machine learning converge.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When I&apos;m not writing C code to understand heap allocation and pointer mechanics, I&apos;m training neural models in
              PyTorch, experimenting with data processing algorithms, or building reactive web interfaces with TypeScript.
            </p>

            {/* University & Focus Pill Banner */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0b0f17] border border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#ff79c6]" /> University & Major
                </span>
                <span className="text-sm font-semibold text-slate-200">Tongmyong University (동명대학교)</span>
                <span className="text-xs text-[#bd93f9] block">AI & Computer Engineering</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0b0f17] border border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#50fa7b]" /> Current Mission
                </span>
                <span className="text-sm font-semibold text-slate-200">Mastering ML Math & Systems</span>
                <span className="text-xs text-[#50fa7b] block">Open to Research & Projects</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-[#131926]/70 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2"
                >
                  <div className={`w-8 h-8 rounded-lg ${pillar.bgColor} border ${pillar.borderColor} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${pillar.color}`} />
                  </div>
                  <h4 className="font-semibold text-slate-200 text-sm">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Fun Fact card + Coding GIF */}
        <div className="lg:col-span-5 space-y-5">
          {/* Fun Meme Card with GIF */}
          <div className="rounded-2xl bg-[#131926] border border-[#bd93f9]/20 overflow-hidden shadow-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#50fa7b] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Developer Personality
              </span>
              <span className="text-[11px] font-mono text-slate-400">status: compiling</span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black/40 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.imgflip.com/65efzo.gif"
                alt="Programming Meme"
                className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-[11px] font-mono text-slate-300">
                &quot;This is fine... just debugging C pointers&quot; ☕
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
              <p>
                ⚡ <strong>Fun Fact:</strong> When an algorithm or memory leak resists solving, I love breaking down the assembly or
                sketching the pointer graphs by hand until everything clicks!
              </p>
              <p className="text-slate-400">
                💬 Ask me about my AI journey, university hackathons, or what I&apos;m building next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
