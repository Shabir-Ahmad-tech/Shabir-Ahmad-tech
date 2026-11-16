"use client";

import React, { useState } from "react";
import { Terminal, Brain, Cpu, Globe, CheckCircle, Code, Layers } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return Brain;
      case "Cpu":
        return Cpu;
      default:
        return Globe;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#bd93f9]/30 text-xs font-mono text-[#bd93f9]">
          <Terminal className="w-3.5 h-3.5" />
          <span>03. TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tools, Languages & <span className="text-gradient">Frameworks</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Technologies I rely on to train models, structure low-level algorithms, and build responsive applications.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#131926] border border-slate-800 mb-8 overflow-x-auto">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.icon);
          const isActive = activeTab === idx;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#bd93f9] text-[#0b0f17] font-bold shadow-lg shadow-[#bd93f9]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-xl bg-[#131926] border border-slate-800/80 hover:border-[#bd93f9]/30 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color }} />
              <div>
                <h4 className="text-sm font-semibold text-white group-hover:text-[#bd93f9] transition-colors">{skill.name}</h4>
                <span className="text-[11px] font-mono text-slate-400">{skill.level}</span>
              </div>
            </div>
            <CheckCircle className="w-4 h-4 text-[#50fa7b] opacity-80" />
          </div>
        ))}
      </div>

      {/* GitHub Dracula Stats Cards Live Embedding */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#131926] border border-[#bd93f9]/20 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
            <Layers className="w-4 h-4 text-[#50fa7b]" />
            <span>GitHub Live Metrics & Languages</span>
          </div>
          <span className="text-xs font-mono text-[#bd93f9]">Profile: @Shabir-Ahmad-tech</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
          <div className="w-full flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.shion.dev/api?username=Shabir-Ahmad-tech&theme=dracula&hide_border=false&include_all_commits=true&count_private=true"
              alt="GitHub Stats"
              className="rounded-xl border border-slate-800 shadow-lg max-w-full hover:scale-[1.02] transition-transform"
            />
          </div>

          <div className="w-full flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.shion.dev/api/top-langs/?username=Shabir-Ahmad-tech&theme=dracula&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
              alt="Top Languages"
              className="rounded-xl border border-slate-800 shadow-lg max-w-full hover:scale-[1.02] transition-transform"
            />
          </div>
        </div>

        <div className="w-full flex justify-center pt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://streak-stats.demolab.com/?user=Shabir-Ahmad-tech&theme=dracula&hide_border=false"
            alt="GitHub Streak"
            className="rounded-xl border border-slate-800 shadow-lg max-w-full hover:scale-[1.02] transition-transform"
          />
        </div>
      </div>
    </section>
  );
}
