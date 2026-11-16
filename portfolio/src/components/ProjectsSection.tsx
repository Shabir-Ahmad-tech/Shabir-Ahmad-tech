"use client";

import React, { useState } from "react";
import { Terminal, ExternalLink, Sparkles, FolderGit2, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { PROJECTS, Project } from "@/data/portfolioData";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI & ML", "Systems & C", "Web & Tools"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#bd93f9]/30 text-xs font-mono text-[#bd93f9]">
            <Terminal className="w-3.5 h-3.5" />
            <span>02. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & <span className="text-gradient">Technical Builds</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Selected engineering projects demonstrating low-level systems in C, neural networks in PyTorch, and interactive web tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#131926] border border-slate-800 self-start sm:self-auto flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#bd93f9] text-[#0b0f17] font-bold shadow-md shadow-[#bd93f9]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-12 p-6 rounded-2xl bg-[#131926]/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#161c2b] border border-slate-700 flex items-center justify-center text-[#50fa7b]">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">More Repositories on GitHub</h4>
            <p className="text-xs text-slate-400">View continuous updates, data science experiments, and algorithms on my GitHub profile.</p>
          </div>
        </div>

        <a
          href="https://github.com/Shabir-Ahmad-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161c2b] hover:bg-[#20273a] text-slate-200 border border-slate-700 text-xs font-mono hover:text-[#bd93f9] transition-all whitespace-nowrap"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Explore All Repos</span>
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "AI & ML":
        return "text-[#bd93f9] bg-[#bd93f9]/15 border-[#bd93f9]/30";
      case "Systems & C":
        return "text-[#50fa7b] bg-[#50fa7b]/15 border-[#50fa7b]/30";
      default:
        return "text-[#8be9fd] bg-[#8be9fd]/15 border-[#8be9fd]/30";
    }
  };

  return (
    <div className="group relative rounded-2xl bg-[#131926] border border-slate-800/90 hover:border-[#bd93f9]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#bd93f9]/5">
      <div className="space-y-4">
        {/* Top bar with category & links */}
        <div className="flex items-center justify-between">
          <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold border ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#161c2b] text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
              title="View on GitHub"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#161c2b] text-slate-400 hover:text-[#bd93f9] hover:bg-slate-700/60 transition-colors"
                title="Live preview / demo"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-[#bd93f9] transition-colors">{project.title}</h3>
          <p className="text-xs font-mono text-slate-400 mt-1">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <div className="space-y-1.5 pt-1">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#50fa7b] shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags */}
      <div className="flex items-center gap-1.5 flex-wrap pt-6 mt-4 border-t border-slate-800/80">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded bg-[#161c2b] text-[11px] font-mono text-slate-300 border border-slate-800">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
