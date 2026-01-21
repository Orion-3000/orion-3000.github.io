import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Calendar, MapPin, Briefcase, ChevronDown, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

import CoverLetter from './components/CoverLetter';
import GoalsChart from './components/GoalsChart';
import Skills from './components/Skills';

// --- Asset Configuration ---
// FOR LOCAL DEV: Ensure these match your actual file paths
import doorClosedImg from './assets/door_closed_no_wheel.png';
import doorOpenImg from './assets/door_open_no_wheel.png';
import profileImg from './assets/profile.png';
import catrackerImg from './assets/catracker.png';
import codeAgentImg from './assets/amd.jpeg';
import gapJunctionImg from './assets/gap_junction.png';

import amdLogo from './assets/logo_amd.png';
import uaiLogo from './assets/logo_uai.jpg';
import sinaiLogo from './assets/logo_sinai.png';
import uoftcsLogo from './assets/logo_uoftcs.png';
import mlLogo from './assets/logo_ML.jpg';

// FOR PREVIEW: Placeholders
// const doorClosedImg = "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000&auto=format&fit=crop";
// const doorOpenImg = "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop";
// const profileImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
// const catrackerImg = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"; // Placeholder for CaTracker
// const codeAgentImg = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"; // Placeholder for Code Agent

// --- Data: Page Sections ---
const SECTIONS = [
  { id: 'home', label: 'Home', bg: '#bd8816ff' },     
  { id: 'about', label: 'About', bg: '#bd8816ff' }, 
  { id: 'projects', label: 'Projects', bg: '#1a1a1a' }, 
  { id: 'experiences', label: 'Experiences', bg: '#4A5D4C' }, 
];

// --- Data: Project Wheel Data ---
// This is the data the Spinner will toggle between
const PROJECT_WHEEL_DATA = [
  {
    id: 0,
    title: "CaTracker",
    short: "End-to-end ML pipeline for calcium imaging video analysis.",
    description: "An end-to-end ML pipeline for calcium imaging video analysis — alignment, SAM-integrated segmentation, tracking, and velocity analysis. This tool reduces manual scoring from 200+ hours to minutes.",
    bgImage: catrackerImg,
    color: '#CD5D67',
    tags: ['Python', 'PyTorch', 'SAM', 'OpenCV']
  },
  {
    id: 1,
    title: "Code Retrieval Agent",
    short: "Vector-indexed code retrieval for GPU drivers.",
    description: "Built a vector-indexed code retrieval agent for multi-million-line C/C++ GPU drivers. Designed a RAG workflow in LangChain to automate debug reports. Deployed as an MCP server integrated into AMD's automated debug pipeline.",
    bgImage: codeAgentImg,
    color: '#5D737E',
    tags: ['LangChain', 'VectorDB', 'C++', 'LLM']
  },
  {
    id: 2,
    title: "Connectomics Pipeline",
    short: "Computer vision for neuron structure detection.",
    description: "Trained ensemble 2D/3D U-Nets on highly imbalanced EM data to detect gap junctions, improving recall on rare structures and enabling connectome mapping.",
    bgImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
    color: '#F2C94C',
    tags: ['U-Net', 'Computer Vision', '3D Modeling']
  },
  {
    id: 3,
    title: "Multimodal Chatbot",
    short: "Azure speech-to-text integration.",
    description: "Built a multimodal chatbot (speech + text) with Azure speech-to-text/text-to-speech, React, and AWS DynamoDB; shipped production REST APIs.",
    bgImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    color: '#5C715E',
    tags: ['React', 'Azure', 'AWS', 'DynamoDB']
  }
];

// --- Components ---

const Footer = () => (
  <footer className="w-full flex justify-center items-center gap-6 py-8 text-white/40 pointer-events-auto bg-black/10 backdrop-blur-sm z-50 relative">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 transform hover:scale-110"><Github size={18} /></a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 transform hover:scale-110"><Linkedin size={18} /></a>
    <a href="/goals" className="ml-2 px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/30 transition-colors">Goals Chart Organizer</a>
    <a href="/skills" className="ml-2 px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/30 transition-colors">Skills</a>
    <a href="/letter" className="ml-2 px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/30 transition-colors">Letter</a>
    <div className="h-4 w-px bg-white/20"></div>
    <span className="text-[10px] md:text-xs font-serif tracking-widest uppercase opacity-60">© 2025 Michael Luo</span>
  </footer>
);

// --- PROJECT WHEEL COMPONENT (Embedded) ---
// Now designed to fit inside a container rather than fixed positioning
const ProjectWheel = ({ activeProjectIndex, onSelectProject }) => {
  // Logic to calculate rotation so the selected item points UP
  const rotation = -activeProjectIndex * 90 + 45;

  return (
    // Adjusted scale logic: Default scale on mobile, normal scale (controlled by dimensions below) on desktop
    <div className="relative flex items-center justify-center transform origin-center scale-75 md:scale-90">
       {/* Original Pointer Style */}
       <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
          <div className="w-4 h-32 bg-neutral-800 rounded-full shadow-xl border border-neutral-700"></div>
       </div>

       {/* Wheel Container - Mobile: 400px. Desktop: 50% of Viewport Height (50vh) */}
       <div className="relative w-[400px] h-[400px] md:w-[50vh] md:h-[50vh]">
         <div className="absolute inset-0 rounded-full border-[12px] border-neutral-800 z-10 pointer-events-none shadow-2xl"></div>
         
         {/* Rotating Disc */}
         <motion.div
            className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-neutral-100"
            animate={{ rotate: rotation }} 
            transition={{ type: "spring", stiffness: 45, damping: 15 }}
         >
            {PROJECT_WHEEL_DATA.map((project, i) => (
                <div key={project.id}
                  onClick={() => onSelectProject(i)}
                  className="absolute top-0 left-0 w-full h-full origin-center cursor-pointer group"
                  // Original Slice Geometry
                  style={{ 
                    transform: `rotate(${i * 90 - 135}deg)`, 
                    clipPath: 'polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 50% 50%)', 
                    zIndex: 20 
                  }}
                >
                  <div 
                    className="w-full h-full transition-all duration-300 hover:brightness-110 hover:scale-105 relative" 
                    style={{ backgroundColor: project.color }}
                  >
                      {/* Original Label Style (Hidden until hover) */}
                      <div 
                        className="absolute text-white font-serif font-bold text-xl tracking-widest uppercase drop-shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                        style={{ 
                          top: '50%', 
                          left: '75%', 
                          transform: 'translate(-50%, -50%) rotate(90deg)', 
                          whiteSpace: 'nowrap' 
                        }}
                      >
                        {project.title}
                      </div>
                  </div>
                </div>
            ))}
            {/* Center Shadow Overlay */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.4)] pointer-events-none z-30"></div>
         </motion.div>

         {/* Original Center Hub */}
         <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neutral-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-neutral-600 z-40 shadow-lg flex items-center justify-center pointer-events-none">
            <div className="w-4 h-4 bg-neutral-500 rounded-full"></div>
         </div>
       </div>
    </div>
  );
};

// --- Content Sections ---

const HomePage = ({ onEnter }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-[#2b2b2b]">
      <div className="absolute inset-0 w-full h-full">
        {/* Closed Door (Base Layer) */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(${doorClosedImg})` }} />
        {/* Open Door (Overlay Layer) */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(${doorOpenImg})`, opacity: isHovered ? 1 : 0 }} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div 
          className="absolute left-[10%] md:left-[15%] text-white font-serif text-5xl md:text-8xl font-bold drop-shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Michael
        </motion.div>
        <motion.div 
          className="absolute right-[10%] md:right-[15%] text-white font-serif text-5xl md:text-8xl font-bold drop-shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Luo
        </motion.div>
      </div>

      <div 
        className="absolute z-20 w-64 h-96 md:w-80 md:h-[500px] cursor-pointer group top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onEnter}
      >
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-serif text-2xl tracking-[0.5em] uppercase drop-shadow-lg whitespace-nowrap"
          initial={{ y: 0 }}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter
        </motion.div>
      </div>
      <div className="absolute bottom-8 text-center z-20 pointer-events-none">
        <div className="animate-bounce text-white/50 text-[10px] md:text-xs uppercase tracking-widest drop-shadow-md">Or Scroll Down</div>
      </div>
    </div>
  );
};

const AboutPage = () => {
    const CARD_COLORS = {
        exploring: '#a77305ff', 
        learning: '#a55026ff', 
        creating: '#4d340cff', 
    };
    const CLOVER_BG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 C 30 20 40 20 40 30 C 50 30 50 40 40 40 C 40 50 30 50 30 40 C 20 50 20 40 30 40 C 20 40 20 30 30 30 Z' fill='%232D4A3E' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`;

    return (
        <div 
            className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-20 w-full relative flex flex-col justify-center" 
            style={{ backgroundImage: CLOVER_BG }}
        >
            <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            >
            <div className="mb-10">
                <h1 className="text-4xl md:text-6xl font-serif text-black mb-4">Hi! I'm Michael.</h1>
                <h2 className="text-xl md:text-3xl italic text-black/80 font-serif">Welcome to my portfolio 👋</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8"> 
                <div 
                    className="p-6 md:p-8 rounded-xl shadow-lg text-white/90 leading-relaxed transform -rotate-1 transition-transform hover:rotate-0" 
                    style={{ backgroundColor: CARD_COLORS.exploring }}
                >
                    <p>🎓 Grade 10 student at Unionville High School with experience working in academic research labs and industry engineering teams.
                       Contributed to production ML systems, compiler infrastructure, and large-scale research pipelines while maintaining a full secondary school course load. <i>(Expected graduation: 2028)</i></p>
                </div>

                <div 
                    className="p-6 md:p-8 rounded-xl shadow-lg text-white/90 leading-relaxed transform rotate-1 transition-transform hover:rotate-0" 
                    style={{backgroundColor: CARD_COLORS.learning}}
                >
                    <p className="mb-4">
                        Built a <strong>vector-indexed retrieval system</strong> capable of searching <strong>multi-million-line codebases</strong> using semantic embeddings and keyword filtering.
                         Designed <strong>retrieval-augmented generation (RAG)</strong> pipelines to summarize, trace, and explain complex code paths. Implemented <strong>model optimization techniques</strong> including quantization-aware workflows and graph-level transformations to improve inference efficiency and reliability.
                    </p>
                </div>

                <div 
                    className="p-6 md:p-8 rounded-xl shadow-lg text-white/90 leading-relaxed transform -rotate-1 transition-transform hover:rotate-0" 
                    style={{backgroundColor: CARD_COLORS.creating}}
                >
                    <p>🍪 In my spare time, I like to learn musical themes on the violin, bake, and swim. I also like reading, and enjoy making videos on books and poems.</p>
                    <div className="text-sm opacity-80 space-y-2 mt-4">
                        <p><strong>Favs:</strong> Howl's Moving Castle, Lord of the Rings, A Tree Grows in Brooklyn</p>
                    </div>
                </div>
            </div>

            <div className="w-full pt-12 md:pt-16">
                <div 
                    className="p-6 md:p-8 rounded-xl shadow-lg text-white/90 leading-relaxed transform rotate-1 transition-transform hover:rotate-0" 
                    style={{ backgroundColor: '#404040' }} 
                >
                    <div className="space-y-4 text-lg">
                        <div className='flex flex-wrap gap-4'>
                            <div><span className="font-bold text-white">Languages:</span> <span className="text-white/80 font-light">Python, C, C++, JavaScript, SQL, Bash</span></div>
                            <div><span className="font-bold text-white">Frameworks:</span> <span className="text-white/80 font-light">PyTorch, ONNX, React, LangChain</span></div>
                            <div><span className="font-bold text-white">Tools:</span> <span className="text-white/80 font-light">Docker, Git, AWS, Linux</span></div>
                        </div>
                    </div>
                </div>
            </div>

            </motion.div>
        </div>
    );
};

// --- UPDATED PROJECT DISPLAY ---
// Updated to include the Wheel embedded in the layout
// Desktop: Row Layout (Content Left, Wheel Right)
// Mobile: Col Layout (Wheel Top, Content Bottom)
const ProjectDisplay = ({ activeProjectIndex, onSelectProject }) => {
  const project = PROJECT_WHEEL_DATA[activeProjectIndex];

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-black">
      {/* Background Image (Absolute, covers whole section) */}
      <AnimatePresence mode="popLayout">
        <motion.div 
            key={project.id}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 100%), url(${project.bgImage})` 
            }}
        />
      </AnimatePresence>

      {/* -- MOBILE ONLY: SPINNER ON TOP -- */}
      {/* Visual order: 1 (Top). only visible < md */}
      <div className="md:hidden w-full h-[350px] flex items-center justify-center relative z-20 mt-16 flex-shrink-0">
          <div className="transform scale-[0.6]">
             <ProjectWheel activeProjectIndex={activeProjectIndex} onSelectProject={onSelectProject} />
          </div>
      </div>

      {/* -- CONTENT SECTION -- */}
      {/* Desktop: Order 1 (Left). Mobile: Order 2 (Bottom) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-24 pb-20 md:pb-0">
         <motion.div
            key={`content-${project.id}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
         >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-white/50"></div>
                <span className="text-yellow-400 font-serif italic tracking-wider">Featured Project 0{project.id + 1}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/70 bg-white/5 backdrop-blur-sm">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 border-l-4 pl-6" style={{ borderColor: project.color }}>
                {project.description}
            </p>

            {/* Button */}
            <button className="group flex items-center gap-3 text-white border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-all w-max">
                <span className="uppercase tracking-widest text-sm font-bold">View Case Study</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
            </button>
         </motion.div>
      </div>

      {/* -- DESKTOP ONLY: SPINNER ON RIGHT (1/3 Width) -- */}
      {/* Visible only >= md */}
      <div className="hidden md:flex w-1/3 h-full items-center justify-center relative z-20 border-l border-white/5 bg-black/10 backdrop-blur-[2px]">
         {/* force the wheel to be exactly 50% of the viewport height */}
         <div className="w-[10vh] h-[100vh] flex items-center justify-center">
           <ProjectWheel activeProjectIndex={activeProjectIndex} onSelectProject={onSelectProject} />
         </div>
      </div>

    </div>
  );
};

// --- Resume Data & Component (Unchanged) ---
const RESUME_DATA = [
  {
    id: 1,
    role: "Large-Scale Code Intelligence",
    company: "Independent Project",
    period: "2024 – Present",
    location: "Personal Work",
    description:
      "Designed systems for understanding and navigating extremely large codebases using semantic search and retrieval-augmented generation.",
    logo: mlLogo,
    details: [
      "Built a vector-indexed code retrieval system capable of searching multi-million-line C/C++ codebases using semantic embeddings combined with keyword and structural filtering.",
      "Designed retrieval-augmented generation (RAG) pipelines to trace execution paths, summarize complex logic, and surface relevant files and functions with minimal hallucination.",
      "Implemented indexing, chunking, and re-ranking strategies to balance accuracy, latency, and scalability for large repositories.",
      "Focused on code reasoning, system design, and automation rather than simple demo-level search."
    ]
  },
  {
    id: 2,
    role: "Model Optimization & ML Systems",
    company: "Independent Project",
    period: "2024 – Present",
    location: "Personal Work",
    description:
      "Explored model optimization techniques and ML infrastructure for efficient and reliable inference.",
    logo: mlLogo,
    details: [
      "Implemented reduced-precision and quantization-aware workflows, exploring tradeoffs between accuracy, performance, and numerical stability.",
      "Built graph-level optimizations including operator fusion, constant folding, and elimination of redundant operations.",
      "Developed validation pipelines to compare optimized models against floating-point baselines using accuracy and performance metrics.",
      "Focused on system-level understanding of inference pipelines rather than framework-specific shortcuts."
    ]
  },
  {
    id: 3,
    role: "Applied Computer Vision Pipelines",
    company: "Independent Project",
    period: "2023 – Present",
    location: "Personal Work",
    description:
      "Developed end-to-end computer vision systems for real-world, noisy data.",
    logo: mlLogo,
    details: [
      "Built complete ML pipelines including preprocessing, training, evaluation, and visualization for real experimental data.",
      "Trained ensemble 2D and 3D convolutional neural networks on highly imbalanced datasets to detect rare structures.",
      "Implemented segmentation, tracking, and post-processing workflows with robustness to noise, drift, and incomplete data.",
      "Emphasized reproducibility, modular design, and usability over benchmark-only performance."
    ]
  },
  {
    id: 4,
    role: "Research-Driven Software Engineering",
    company: "Independent Study",
    period: "2022 – Present",
    location: "Personal Work",
    description:
      "Translated research ideas into reliable, production-quality software systems.",
    logo: mlLogo,
    details: [
      "Built interactive systems combining machine learning models, APIs, and user-facing interfaces.",
      "Designed clean, modular architectures with attention to documentation, testing, and long-term maintainability.",
      "Read and implemented ideas from academic papers, adapting them to practical engineering constraints.",
      "Focused on correctness, interpretability, and real-world usability rather than one-off experiments."
    ]
  }
];

const ResumeTimeline = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 pr-48 md:pr-20 md:px-20 w-full md:max-w-[50vw] xl:max-w-[90vw] relative flex flex-col justify-center">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-10">Experience</h1>
        
        <div className="relative border-l-2 border-white/20 ml-3 md:ml-6 space-y-12">
          {RESUME_DATA.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#5D737E] group-hover:bg-[#F2C94C] group-hover:border-white transition-colors duration-300"></div>
              
              <div 
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* Main Card Container - Now a Flex Container */}
                <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all flex flex-col md:flex-row md:items-center gap-6">
                   
                   {/* Left Side: Content */}
                   <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">{item.role}</h3>
                          <span className="text-white/50 text-sm font-mono whitespace-nowrap flex items-center gap-1">
                            <Calendar size={14} /> {item.period}
                          </span>
                      </div>
                      
                      <div className="text-lg text-[#F2C94C] font-medium mb-2 flex items-center gap-2">
                          <Briefcase size={16} /> {item.company}
                      </div>

                      <div className="text-white/60 text-sm mb-4 flex items-center gap-1">
                          <MapPin size={14} /> {item.location}
                      </div>

                      {!expandedId && (
                        <p className="text-white/80 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      )}

                      <AnimatePresence>
                        {expandedId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="list-disc list-outside ml-4 mt-4 space-y-2 text-white/80 text-sm leading-relaxed marker:text-yellow-300/50">
                              {item.details.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div className="mt-4 flex justify-center md:justify-start">
                          <ChevronDown 
                            size={20} 
                            className={`text-white/30 transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`}
                          />
                      </div>
                   </div>

                   {/* Right Side: Company Logo */}
                   <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg p-2 flex-shrink-0 flex items-center justify-center md:order-last order-first self-center md:self-auto">
                      <img src={item.logo} alt={`${item.company} logo`} className="max-w-full max-h-full object-contain" />
                   </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Layout ---

const MainLayout = () => {
  const navigate = useNavigate();
  const [activeSectionId, setActiveSectionId] = useState('home');
  // State for the Project Switcher
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Helper to smooth scroll to a section ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect scroll position to update active section (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      // Offset to trigger "active" state a bit earlier
      const scrollPosition = window.scrollY + window.innerHeight / 2; 
      
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSectionId !== section.id) {
              setActiveSectionId(section.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSectionId]);

  // Determine current background color based on section
  const activeSection = SECTIONS.find(s => s.id === activeSectionId) || SECTIONS[0];

  return (
    <div className="w-full transition-colors duration-1000 ease-in-out overflow-x-hidden selection:bg-white/30 relative" style={{ backgroundColor: activeSection.bg }}>
      
      {/* REMOVED: Floating Spinner 
         The spinner is now embedded inside ProjectDisplay 
      */}

      <div id="home">
        <HomePage onEnter={() => scrollToSection('about')} />
      </div>
      
      <div id="about">
        <AboutPage />
      </div>
      
      <div id="projects">
        {/* Pass Setter to Embedded Spinner */}
        <ProjectDisplay 
          activeProjectIndex={activeProjectIndex} 
          onSelectProject={setActiveProjectIndex} 
        />
      </div>
      
      <div id="experiences">
        <ResumeTimeline />
      </div>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/letter" element={<CoverLetter />} />
        <Route path="/goals" element={<GoalsChart />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;