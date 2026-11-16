export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "AI & ML" | "Systems & C" | "Web & Tools";
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    color: string;
    iconUrl?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Shabir Ahmad",
  role: "AI & Computer Engineering Student",
  university: "Tongmyong University",
  location: "Busan, South Korea 🇰🇷",
  headline: "Building the future at the intersection of AI engineering, low-level systems, and modern web applications.",
  bio: [
    "First-year AI & Computer Engineering student with a relentless drive to understand both ends of the stack: from low-level memory in C to deep neural networks in PyTorch.",
    "Passionate about turning theoretical algorithms into high-performance, real-world solutions. Always exploring machine learning architectures, statistical data modeling, and clean software architecture.",
    "Actively seeking collaborations on open-source AI projects, undergraduate research, and innovative software development.",
  ],
  socials: {
    linkedin: "https://linkedin.com/in/shabir-ahmad-ai",
    x: "https://x.com/ShabirAhmadev",
    github: "https://github.com/Shabir-Ahmad-tech",
    email: "shabir.ahmad.codes@gmail.com",
  },
  stats: {
    contributions: "300+",
    languages: "Python, C, TypeScript",
    focus: "AI / ML Foundations",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "ai-vision-analyzer",
    title: "Neural Vision Classifier & Analytics",
    tagline: "Deep learning pipeline for multi-class image classification and feature extraction",
    description:
      "Engineered an end-to-end computer vision pipeline using PyTorch and OpenCV. Features real-time inference, data augmentation pipelines, and automated confusion matrix visualization with Plotly.",
    tags: ["Python", "PyTorch", "NumPy", "Matplotlib", "OpenCV"],
    category: "AI & ML",
    githubUrl: "https://github.com/Shabir-Ahmad-tech",
    featured: true,
    highlights: ["94%+ validation accuracy on custom dataset", "Interactive metrics profiling via Plotly", "Optimized inference pipeline"],
  },
  {
    id: "data-science-forecasting",
    title: "Predictive Data Modeling Engine",
    tagline: "Statistical analysis, trend forecasting and exploratory data framework",
    description:
      "A modular data analytics engine built with Pandas and scikit-learn to clean, transform, and run regression models over multidimensional datasets. Includes automated missing-data imputation.",
    tags: ["Python", "Pandas", "scikit-learn", "Plotly", "Jupyter"],
    category: "AI & ML",
    githubUrl: "https://github.com/Shabir-Ahmad-tech",
    featured: true,
    highlights: ["Automated EDA reporting pipeline", "Outlier detection using IQR & Z-score", "Interactive visual dashboard"],
  },
  {
    id: "c-memory-allocator",
    title: "System Memory & Data Structures in C",
    tagline: "Low-level memory management and algorithmic data structure implementation",
    description:
      "Implemented custom dynamic memory allocators, balanced binary search trees, and thread-safe circular buffers in pure C. Focuses on cache locality, zero memory leaks, and pointer arithmetic.",
    tags: ["C", "Linux", "Valgrind", "GDB", "Systems"],
    category: "Systems & C",
    githubUrl: "https://github.com/Shabir-Ahmad-tech",
    featured: true,
    highlights: ["Zero memory leaks verified via Valgrind", "Custom heap arena allocation", "Benchmarked against standard malloc"],
  },
  {
    id: "interactive-dev-hub",
    title: "Real-time Developer Portfolio & Presence",
    tagline: "Next-generation developer showcase with simulated multi-agent building engine",
    description:
      "Designed and built this high-performance portfolio featuring a multi-cursor collaborative animation engine, custom spotlight tracking, and dynamic Dracula aesthetics.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web & Tools",
    githubUrl: "https://github.com/Shabir-Ahmad-tech/Shabir-Ahmad-tech",
    liveUrl: "https://github.com/Shabir-Ahmad-tech",
    featured: false,
    highlights: ["60fps Framer Motion spring physics", "Accessible with prefers-reduced-motion", "Tailwind v4 Dracula theme"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Artificial Intelligence & Data Science",
    icon: "Brain",
    skills: [
      { name: "Python", level: "Advanced", color: "#3776ab" },
      { name: "PyTorch", level: "Intermediate", color: "#ee4c2c" },
      { name: "scikit-learn", level: "Proficient", color: "#f7931e" },
      { name: "Pandas", level: "Advanced", color: "#150458" },
      { name: "NumPy", level: "Advanced", color: "#013243" },
      { name: "Matplotlib", level: "Proficient", color: "#11557c" },
      { name: "Plotly", level: "Proficient", color: "#3f4f75" },
    ],
  },
  {
    title: "Systems & Low-Level Engineering",
    icon: "Cpu",
    skills: [
      { name: "C Programming", level: "Proficient", color: "#a8b9cc" },
      { name: "Linux / Bash", level: "Proficient", color: "#fcc624" },
      { name: "Data Structures & Algos", level: "Active Focus", color: "#50fa7b" },
      { name: "Git & Version Control", level: "Advanced", color: "#f05032" },
      { name: "Memory Management", level: "Intermediate", color: "#ff79c6" },
    ],
  },
  {
    title: "Modern Web & Developer Experience",
    icon: "Globe",
    skills: [
      { name: "TypeScript", level: "Proficient", color: "#3178c6" },
      { name: "JavaScript (ES6+)", level: "Advanced", color: "#f7df1e" },
      { name: "HTML5 & CSS3", level: "Advanced", color: "#e34f26" },
      { name: "Next.js / React", level: "Proficient", color: "#8be9fd" },
      { name: "Tailwind CSS", level: "Advanced", color: "#38bdf8" },
      { name: "VS Code & Jupyter", level: "Advanced", color: "#007acc" },
    ],
  },
];

export const DEV_QUOTES = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    quote: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "Artificial intelligence is not about replacing humans, it is about augmenting human potential.",
    author: "Garry Kasparov",
  },
];
