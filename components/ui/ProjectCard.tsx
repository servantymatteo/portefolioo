'use client';

import { Project } from '@/lib/data/projects';
import { getBorderColor, getIconColor, getTitleColor } from '@/lib/utils/colors';

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  onClick
}: ProjectCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer border-2 ${getBorderColor(project.gradient)}
        ${isHovered ? 'scale-[0.98]' : 'scale-100'}
        transition-all duration-500 ease-out
        group flex flex-col
        ${index === 3 ? 'lg:col-span-2' : ''}
      `}
      style={{ minHeight: '300px' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Scan line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

      {/* Neon glow effect on hover */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="relative h-full p-8 flex flex-col text-white">
        {/* Icon at the top */}
        <div className="mb-auto">
          <div className={`w-14 h-14 rounded-xl border backdrop-blur-sm flex items-center justify-center mb-4 transition-all ${getIconColor(project.gradient)}`}>
            {project.category === 'Réseau' && (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            )}
            {project.category === 'Développement' && (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            )}
            {project.category === 'DevOps' && (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            )}
            {project.category === 'Sécurité' && (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )}
            {project.category === 'Backend' && (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            )}
          </div>
        </div>

        {/* Content at the bottom */}
        <div className={`transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
          <div className={`text-xs font-bold opacity-80 mb-2 font-mono uppercase tracking-wider ${getTitleColor(project.gradient)}`}>
            {project.category}
          </div>
          <h3 className={`text-3xl font-black mb-2 font-mono ${getTitleColor(project.gradient)}`} style={{textShadow: '0 0 8px currentColor'}}>
            {project.title}
          </h3>
          <p className={`text-gray-300 transition-all duration-500 text-sm ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
