"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, FastForward, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface CursorData {
  id: string;
  name: string;
  color: string;
  textColor: string;
  avatar: string;
  currentAction: string;
}

const AGENTS: CursorData[] = [
  {
    id: "shabir",
    name: "shabir.tsx",
    color: "#bd93f9",
    textColor: "#0b0f17",
    avatar: "👨‍💻",
    currentAction: "Typing hero intro...",
  },
  {
    id: "ai_agent",
    name: "neural_agent.py",
    color: "#50fa7b",
    textColor: "#0b0f17",
    avatar: "🧠",
    currentAction: "Loading PyTorch weights...",
  },
  {
    id: "compiler",
    name: "system_core.c",
    color: "#8be9fd",
    textColor: "#0b0f17",
    avatar: "⚡",
    currentAction: "Allocating memory...",
  },
  {
    id: "designer",
    name: "ui_architect",
    color: "#ff79c6",
    textColor: "#0b0f17",
    avatar: "🎨",
    currentAction: "Rendering layout...",
  },
];

interface MultiCursorBuilderProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export default function MultiCursorBuilder({ onComplete, isReplay = false }: MultiCursorBuilderProps) {
  const [phase, setPhase] = useState<number>(0);
  const [typedSnippet, setTypedSnippet] = useState("");
  const [activeMessage, setActiveMessage] = useState("Collaborative Builder Engine: Connecting agents...");
  const [isSkipped, setIsSkipped] = useState(false);

  // Check localStorage if not replaying
  useEffect(() => {
    if (!isReplay && typeof window !== "undefined") {
      const hasSeen = localStorage.getItem("shabir_portfolio_has_seen_builder");
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (hasSeen === "true" || prefersReduced) {
        onComplete();
        setIsSkipped(true);
        return;
      }
    }
  }, [isReplay, onComplete]);

  // Animation timeline
  useEffect(() => {
    if (isSkipped) return;

    const timeline = [
      // Phase 0: Initial spawn
      setTimeout(() => {
        setPhase(1);
        setActiveMessage("🚀 shabir.tsx started editing Hero header...");
      }, 700),

      // Phase 1: Typing hero
      setTimeout(() => {
        setPhase(2);
        setTypedSnippet("const student = new AIEngineer({ university: 'Tongmyong' });");
        setActiveMessage("🧠 neural_agent.py linking PyTorch & scikit-learn models...");
      }, 2000),

      // Phase 2: Building layout
      setTimeout(() => {
        setPhase(3);
        setActiveMessage("⚡ system_core.c benchmarking low-level systems & memory...");
      }, 3400),

      // Phase 3: Final check
      setTimeout(() => {
        setPhase(4);
        setActiveMessage("✨ All components linked! 0 errors, 100% build passed.");
        try {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#bd93f9", "#50fa7b", "#8be9fd", "#ff79c6"],
          });
        } catch {
          // ignore in environments without canvas
        }
      }, 4700),

      // Phase 4: Fade out and hand over
      setTimeout(() => {
        if (typeof window !== "undefined") {
          localStorage.setItem("shabir_portfolio_has_seen_builder", "true");
        }
        onComplete();
      }, 5700),
    ];

    return () => timeline.forEach((t) => clearTimeout(t));
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("shabir_portfolio_has_seen_builder", "true");
    }
    onComplete();
  };

  if (isSkipped) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-4 md:p-8 bg-[#0b0f17]/85 backdrop-blur-[2px] overflow-hidden select-none"
      >
        {/* Top Floating Control Bar */}
        <div className="flex items-center justify-between w-full max-w-4xl mx-auto pointer-events-auto">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161c2b] border border-[#bd93f9]/30 text-xs text-slate-200 shadow-lg glow-purple"
          >
            <Terminal className="w-3.5 h-3.5 text-[#50fa7b] animate-pulse" />
            <span className="font-mono text-[#8be9fd]">[Live Build]</span>
            <span className="truncate max-w-[200px] sm:max-w-md">{activeMessage}</span>
          </motion.div>

          <button
            onClick={handleSkip}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#232b3e]/80 hover:bg-[#bd93f9] hover:text-[#0b0f17] transition-all text-xs text-slate-300 font-medium border border-slate-700/60 shadow-md cursor-pointer"
            title="Skip build animation"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>Skip Intro</span>
          </button>
        </div>

        {/* Central Live Canvas Preview Outline */}
        <div className="relative w-full max-w-3xl mx-auto h-[320px] md:h-[400px] flex items-center justify-center">
          {/* Dynamic Wireframe Box being drawn */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, borderColor: "rgba(189, 147, 249, 0.1)" }}
            animate={{
              scale: phase >= 2 ? 1 : 0.95,
              opacity: 1,
              borderColor: phase >= 4 ? "rgba(80, 250, 123, 0.4)" : "rgba(189, 147, 249, 0.3)",
            }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full rounded-2xl border-2 border-dashed bg-[#121824]/60 p-6 flex flex-col justify-center items-center shadow-2xl backdrop-blur-sm"
          >
            {/* Corner tags being adjusted */}
            <div className="absolute top-3 left-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5555]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f1fa8c]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#50fa7b]" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">portfolio/src/app/page.tsx</span>
            </div>

            {/* Live Typing Content */}
            <div className="text-center space-y-3 px-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: phase >= 1 ? 1 : 0, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bd93f9]/15 border border-[#bd93f9]/30 text-xs font-mono text-[#bd93f9]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulating Real-Time Multi-Agent Assembly</span>
              </motion.div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-mono min-h-[44px]">
                {phase >= 2 ? (
                  <span className="text-gradient">Shabir Ahmad</span>
                ) : (
                  <span className="text-slate-500 animate-pulse">&lt;Rendering Profile.../&gt;</span>
                )}
              </h2>

              <p className="text-xs sm:text-sm font-mono text-[#50fa7b] min-h-[24px]">
                {typedSnippet ? `> ${typedSnippet}` : "> Connecting neural nodes..."}
              </p>

              {phase >= 4 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-xs font-mono text-[#50fa7b] pt-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#50fa7b]" />
                  <span>Assembly complete — welcome to my digital realm!</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* CURSOR 1: Shabir (Purple) */}
          <motion.div
            initial={{ x: "-10vw", y: "-20vh", opacity: 0 }}
            animate={
              phase === 0
                ? { x: -80, y: -40, opacity: 1 }
                : phase === 1
                ? { x: 30, y: -20, opacity: 1 }
                : phase === 2
                ? { x: -40, y: 40, opacity: 1 }
                : phase === 3
                ? { x: 60, y: 80, opacity: 1 }
                : { x: 10, y: 20, opacity: 0.8 }
            }
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="absolute top-1/2 left-1/2 pointer-events-none z-50 flex items-start gap-1"
          >
            <CursorSVG color="#bd93f9" />
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold shadow-md" style={{ backgroundColor: "#bd93f9", color: "#0b0f17" }}>
              <span>👨‍💻</span>
              <span>shabir.tsx</span>
            </div>
          </motion.div>

          {/* CURSOR 2: AI Neural Agent (Green) */}
          <motion.div
            initial={{ x: "30vw", y: "-30vh", opacity: 0 }}
            animate={
              phase === 0
                ? { x: 120, y: -80, opacity: 1 }
                : phase === 1
                ? { x: 160, y: -30, opacity: 1 }
                : phase === 2
                ? { x: 90, y: 60, opacity: 1 }
                : phase === 3
                ? { x: -140, y: -50, opacity: 1 }
                : { x: -30, y: 15, opacity: 0.8 }
            }
            transition={{ type: "spring", stiffness: 85, damping: 16, delay: 0.1 }}
            className="absolute top-1/2 left-1/2 pointer-events-none z-50 flex items-start gap-1"
          >
            <CursorSVG color="#50fa7b" />
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold shadow-md" style={{ backgroundColor: "#50fa7b", color: "#0b0f17" }}>
              <span>🧠</span>
              <span>neural_agent.py</span>
            </div>
          </motion.div>

          {/* CURSOR 3: Low-Level Systems (Cyan) */}
          <motion.div
            initial={{ x: "-30vw", y: "30vh", opacity: 0 }}
            animate={
              phase === 0
                ? { x: -160, y: 100, opacity: 1 }
                : phase === 1
                ? { x: -120, y: 50, opacity: 1 }
                : phase === 2
                ? { x: -180, y: -30, opacity: 1 }
                : phase === 3
                ? { x: 40, y: -90, opacity: 1 }
                : { x: -10, y: -20, opacity: 0.8 }
            }
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.15 }}
            className="absolute top-1/2 left-1/2 pointer-events-none z-50 flex items-start gap-1"
          >
            <CursorSVG color="#8be9fd" />
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold shadow-md" style={{ backgroundColor: "#8be9fd", color: "#0b0f17" }}>
              <span>⚡</span>
              <span>system_core.c</span>
            </div>
          </motion.div>

          {/* CURSOR 4: UI Designer (Pink) */}
          <motion.div
            initial={{ x: "25vw", y: "25vh", opacity: 0 }}
            animate={
              phase === 0
                ? { x: 180, y: 90, opacity: 1 }
                : phase === 1
                ? { x: -60, y: -90, opacity: 1 }
                : phase === 2
                ? { x: 150, y: -60, opacity: 1 }
                : phase === 3
                ? { x: -70, y: 80, opacity: 1 }
                : { x: 25, y: -15, opacity: 0.8 }
            }
            transition={{ type: "spring", stiffness: 95, damping: 18, delay: 0.05 }}
            className="absolute top-1/2 left-1/2 pointer-events-none z-50 flex items-start gap-1"
          >
            <CursorSVG color="#ff79c6" />
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold shadow-md" style={{ backgroundColor: "#ff79c6", color: "#0b0f17" }}>
              <span>🎨</span>
              <span>ui_architect</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status bar */}
        <div className="w-full max-w-xl mx-auto flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#50fa7b] animate-ping" />
            <span>4 Agents Rendering Port 3000</span>
          </div>
          <span>Tongmyong Univ • AI & Computer Eng</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function CursorSVG({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg -ml-1 -mt-1">
      <path
        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 0 0-.85.36Z"
        fill={color}
        stroke="#0b0f17"
        strokeWidth="1.5"
      />
    </svg>
  );
}
