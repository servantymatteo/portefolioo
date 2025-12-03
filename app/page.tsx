'use client';

import { useState, useEffect } from 'react';
import { projects } from '@/lib/data/projects';
import { articles } from '@/lib/data/articles';
import Navigation from '@/components/navigation/Navigation';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GitHubSection from '@/components/sections/GitHubSection';
import GitHubStatsSection from '@/components/sections/GitHubStatsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import SkillsSection from '@/components/sections/SkillsSection';
import VeilleSection from '@/components/sections/VeilleSection';
import StatsSection from '@/components/sections/StatsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import ProjectModal from '@/components/modals/ProjectModal';
import ArticleModal from '@/components/modals/ArticleModal';
import SnakeGame from '@/components/SnakeGame';
import Terminal from '@/components/ui/Terminal';
import MatrixRain from '@/components/effects/MatrixRain';

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [showSnake, setShowSnake] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedProjectData = projects.find(p => p.id === selectedProject);
  const selectedArticleData = articles.find(a => a.id === selectedArticle);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Matrix Rain Effect (toggleable) */}
      {showMatrix && <MatrixRain opacity={0.15} />}

      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.03),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Scan Lines Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.03)_50%)] bg-[length:100%_4px] pointer-events-none animate-[scan_8s_linear_infinite]" />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setShowTerminal(true)}
          className="group relative w-14 h-14 bg-black/90 border-2 border-green-500/50 rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
          title="Open Terminal"
        >
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>

        <button
          onClick={() => setShowMatrix(!showMatrix)}
          className={`group relative w-14 h-14 bg-black/90 border-2 ${showMatrix ? 'border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]' : 'border-cyan-500/50'} rounded-xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 flex items-center justify-center backdrop-blur-sm`}
          title="Toggle Matrix Effect"
        >
          <svg className={`w-6 h-6 ${showMatrix ? 'text-green-400' : 'text-cyan-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar scrollProgress={scrollProgress} />

      {/* Navigation */}
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* All Sections */}
      <HeroSection setShowSnake={setShowSnake} />
      <ProjectsSection setSelectedProject={setSelectedProject} />
      <GitHubSection />
      <GitHubStatsSection />
      <TimelineSection />
      <SkillsSection />
      <VeilleSection setSelectedArticle={setSelectedArticle} />
      <StatsSection />
      <CertificationsSection />
      <ContactSection />

      {/* Modals */}
      <ProjectModal
        project={selectedProjectData || null}
        onClose={() => setSelectedProject(null)}
      />
      <ArticleModal
        article={selectedArticleData || null}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Snake Game */}
      {showSnake && <SnakeGame onClose={() => setShowSnake(false)} darkMode={darkMode} />}

      {/* Terminal */}
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </div>
  );
}
