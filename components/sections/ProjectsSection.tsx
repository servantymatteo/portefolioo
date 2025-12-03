'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';
import { projects, type Project } from '@/lib/data/projects';

interface ProjectsSectionProps {
  setSelectedProject: (id: number) => void;
}

export default function ProjectsSection({ setSelectedProject }: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const getBorderColor = (gradient: string) => {
    if (gradient.includes('blue') || gradient.includes('cyan')) return 'border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]';
    if (gradient.includes('purple') || gradient.includes('pink')) return 'border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]';
    if (gradient.includes('orange') || gradient.includes('red')) return 'border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]';
    if (gradient.includes('green') || gradient.includes('emerald')) return 'border-green-500/50 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]';
    if (gradient.includes('indigo')) return 'border-indigo-500/50 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]';
    return 'border-green-500/50 hover:border-green-400';
  };

  const getIconColor = (gradient: string) => {
    if (gradient.includes('blue') || gradient.includes('cyan')) return 'bg-cyan-500/20 border-cyan-500/50 group-hover:bg-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]';
    if (gradient.includes('purple') || gradient.includes('pink')) return 'bg-purple-500/20 border-purple-500/50 group-hover:bg-purple-500/30 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]';
    if (gradient.includes('orange') || gradient.includes('red')) return 'bg-orange-500/20 border-orange-500/50 group-hover:bg-orange-500/30 group-hover:border-orange-400 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]';
    if (gradient.includes('green') || gradient.includes('emerald')) return 'bg-green-500/20 border-green-500/50 group-hover:bg-green-500/30 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]';
    if (gradient.includes('indigo')) return 'bg-indigo-500/20 border-indigo-500/50 group-hover:bg-indigo-500/30 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]';
    return 'bg-green-500/20 border-green-500/50';
  };

  const getTitleColor = (gradient: string) => {
    if (gradient.includes('blue') || gradient.includes('cyan')) return 'text-cyan-400';
    if (gradient.includes('purple') || gradient.includes('pink')) return 'text-purple-400';
    if (gradient.includes('orange') || gradient.includes('red')) return 'text-orange-400';
    if (gradient.includes('green') || gradient.includes('emerald')) return 'text-green-400';
    if (gradient.includes('indigo')) return 'text-indigo-400';
    return 'text-green-400';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Réseau':
        return (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'Développement':
        return (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'DevOps':
        return (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'Sécurité':
        return (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'Backend':
        return (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-black relative">
      {/* Scan Lines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-black tracking-tight mb-4 text-green-400 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
            {'>'}{'>'}  PROJETS - MES BUILDS
          </h2>
          <p className="text-xl text-cyan-400 mb-16 font-mono">Les projets où j&apos;ai tryhard</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer border-2 ${getBorderColor(project.gradient)}
                ${hoveredProject === project.id ? 'scale-[0.98]' : 'scale-100'}
                transition-all duration-500 ease-out
                group flex flex-col
                ${index === 3 ? 'lg:col-span-2' : ''}
              `}
              style={{
                minHeight: '300px',
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

              {/* Scan line effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

              {/* Neon glow effect on hover */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10" />
              </div>

              <div className="relative h-full p-8 flex flex-col text-white">
                {/* Icon at the top */}
                <div className="mb-auto">
                  <div className={`w-14 h-14 rounded-xl border backdrop-blur-sm flex items-center justify-center mb-4 transition-all ${getIconColor(project.gradient)}`}>
                    {getCategoryIcon(project.category)}
                  </div>
                </div>

                {/* Content at the bottom */}
                <div className={`
                  transition-transform duration-500
                  ${hoveredProject === project.id ? 'translate-y-0' : 'translate-y-2'}
                `}>
                  <div className={`text-xs font-bold opacity-80 mb-2 font-mono uppercase tracking-wider ${getTitleColor(project.gradient)}`}>{project.category}</div>
                  <h3 className={`text-3xl font-black mb-2 font-mono ${getTitleColor(project.gradient)}`} style={{textShadow: '0 0 8px currentColor'}}>{project.title}</h3>
                  <p className={`
                    text-gray-300 transition-all duration-500 text-sm
                    ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
