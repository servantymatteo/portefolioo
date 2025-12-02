'use client';

import { useState, useEffect, useRef } from 'react';
import GitHubRepos from '../components/GitHubRepos';
import SnakeGame from '../components/SnakeGame';
import AnimatedCounter from '../components/AnimatedCounter';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: 'Claude Opus 4 et Sonnet 4 : l&apos;IA redéfinit le code',
    excerpt: 'Anthropic dévoile ses modèles hybrides avec raisonnement étendu, établissant de nouveaux standards en développement logiciel.',
    category: 'Intelligence Artificielle',
    date: '2 Décembre 2025',
    gradient: 'from-blue-500 to-cyan-500',
    content: 'Anthropic a introduit Claude Opus 4 et Claude Sonnet 4, marquant une révolution dans l&apos;IA de développement. Claude Opus 4 devient le meilleur modèle de codage au monde avec 72,5% sur SWE-bench et 43,2% sur Terminal-bench, tandis que Sonnet 4 atteint 72,7% sur SWE-bench. Ces modèles hybrides offrent deux modes : des réponses quasi-instantanées ou un raisonnement étendu visible étape par étape. Claude 3.7 Sonnet, premier modèle hybride sur le marché, excelle particulièrement en développement front-end. La compétition s&apos;intensifie avec Gemini 2.0 Flash (250 tokens/sec) et GPT-4.5, chacun optimisant ses forces : Claude pour le code et le raisonnement, GPT pour la polyvalence, Gemini pour la vitesse et le coût.',
    tags: ['Claude Opus 4', 'GPT-4.5', 'Gemini 2.0', 'SWE-bench'],
  },
  {
    id: 2,
    title: 'Vulnérabilités critiques fin 2025 : l&apos;urgence de patcher',
    excerpt: 'Plus de 35 000 CVE signalées en 2025, avec des exploitations actives de failles Windows, Citrix et 7-Zip.',
    category: 'Cybersécurité',
    date: '1 Décembre 2025',
    gradient: 'from-green-500 to-emerald-500',
    content: '2025 affiche un record alarmant avec plus de 35 000 vulnérabilités signalées, dont 38% classées haute ou critique. Les CVE-2025-59230 et CVE-2025-24990 de Microsoft Edge (score CVSS 7.8) sont activement exploitées. Citrix est touché par CVE-2025-7775 permettant l&apos;exécution de code à distance, tandis que 7-Zip nécessite une mise à jour urgente pour CVE-2025-11001 et CVE-2025-11002. La CISA a prolongé son contrat avec MITRE pour maintenir la base CVE opérationnelle. Les organisations doivent impérativement renforcer leurs SOC/MDR/XDR, accélérer le patching des vulnérabilités critiques et intensifier la formation des équipes IT face à ces menaces croissantes.',
    tags: ['CVE-2025', 'Microsoft Edge', 'Citrix', 'Zero-Day'],
  },
  {
    id: 3,
    title: 'Kubernetes 1.35 : mises à jour en place et Node Features',
    excerpt: 'La version 1.35 prévue le 17 décembre apporte les mises à jour de ressources Pod sans redémarrage et améliore la planification.',
    category: 'Infrastructure & Cloud',
    date: '26 Novembre 2025',
    gradient: 'from-purple-500 to-pink-500',
    content: 'Kubernetes 1.35, attendu pour le 17 décembre 2025, marque une étape majeure avec les mises à jour en place des ressources Pod passant en GA. Cette fonctionnalité permet d&apos;ajuster CPU et mémoire sans redémarrer Pods ou Containers, améliorant drastiquement la disponibilité. Node Declared Features (Alpha) résout les problèmes de planification dans les environnements hétérogènes en rendant les capacités des nœuds explicites. Les Image Volumes OCI passent en Beta, offrant de nouvelles possibilités de gestion. Avertissement important : containerd 1.X ne sera plus supporté, migration vers 2.0+ obligatoire. Cette version consolide Kubernetes comme plateforme d&apos;orchestration de référence pour les workloads cloud-native.',
    tags: ['Kubernetes 1.35', 'Pod Updates', 'Node Features', 'containerd'],
  },
];

const projects = [
  {
    id: 1,
    title: 'Infrastructure Cloud',
    description: 'Architecture réseau haute disponibilité',
    category: 'Réseau',
    gradient: 'from-blue-500 to-cyan-500',
    details: 'Conception et déploiement d&apos;une infrastructure cloud complète avec redondance et haute disponibilité. Utilisation de technologies comme AWS, Terraform et Kubernetes pour orchestrer les ressources.',
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
  },
  {
    id: 2,
    title: 'Application Web',
    description: 'Interface moderne et responsive',
    category: 'Développement',
    gradient: 'from-purple-500 to-pink-500',
    details: 'Développement d&apos;une application web moderne avec React et Next.js. Interface utilisateur intuitive et responsive, optimisée pour tous les appareils.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Automatisation',
    description: 'Scripts et outils DevOps',
    category: 'DevOps',
    gradient: 'from-orange-500 to-red-500',
    details: 'Création de pipelines CI/CD automatisés et de scripts pour optimiser les processus de déploiement. Réduction du temps de mise en production de 70%.',
    technologies: ['GitHub Actions', 'Python', 'Bash', 'Ansible'],
  },
  {
    id: 4,
    title: 'Sécurité Réseau',
    description: 'Implémentation de pare-feu et VPN',
    category: 'Sécurité',
    gradient: 'from-green-500 to-emerald-500',
    details: 'Mise en place d&apos;une architecture de sécurité réseau complète avec pare-feu, VPN et systèmes de détection d&apos;intrusion pour protéger les infrastructures critiques.',
    technologies: ['pfSense', 'OpenVPN', 'Wireshark', 'Suricata'],
  },
  {
    id: 5,
    title: 'API REST',
    description: 'Backend scalable et performant',
    category: 'Backend',
    gradient: 'from-indigo-500 to-blue-500',
    details: 'Développement d&apos;une API REST robuste et scalable capable de gérer des milliers de requêtes par seconde. Architecture microservices avec mise en cache intelligente.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
];

export default function Portfolio() {

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  const flipIn = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.7 }
    }
  };

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Mouse Position Tracking for Magnetic Buttons
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

const selectedProjectData = projects.find(p => p.id === selectedProject);
  const selectedArticleData = articles.find(a => a.id === selectedArticle);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} relative transition-colors duration-300`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-xl border-b ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className={`text-xl font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>MS</div>
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
              <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>À propos</a>
              <a href="#projects" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Projets</a>
              <a href="#github" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>GitHub</a>
              <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Expérience</a>
              <a href="#competences" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Compétences</a>
              <a href="#veille" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Veille</a>
              <a href="#stats" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Stats</a>
              <a href="#certifications" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Certifications</a>
              <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Contact</a>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-all duration-300`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`lg:hidden p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-all duration-300`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-6 sm:mb-8 leading-none ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Bonjour, je suis
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-2">
                Matteo Servanty
              </span>
            </h1>
            <p 
              className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed font-light max-w-3xl`}
            >
              Technicien réseaux en alternance, passionné par l&apos;infrastructure cloud
              et le développement web moderne.
            </p>
            <button
              onClick={() => setShowSnake(true)}
              className="opacity-0 hover:opacity-100 transition-opacity mt-8 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-semibold"
              title="Easter Egg: Snake Game!"
            >
              🐍 Snake Game
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className={`text-5xl font-semibold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Projets</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-16`}>Une sélection de mes réalisations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer
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
                <div className={`
                  absolute inset-0 bg-linear-to-br ${project.gradient}
                  transition-opacity duration-500
                  ${hoveredProject === project.id ? 'opacity-100' : 'opacity-90'}
                `} />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                <div className="relative h-full p-8 flex flex-col text-white">
                  {/* Icon at the top */}
                  <div className="mb-auto">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
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
                  <div className={`
                    transition-transform duration-500
                    ${hoveredProject === project.id ? 'translate-y-0' : 'translate-y-2'}
                  `}>
                    <div className="text-sm font-medium opacity-80 mb-2">{project.category}</div>
                    <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                    <p className={`
                      text-white/90 transition-all duration-500
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

      {/* GitHub Section */}
      <section id="github" className={`py-20 px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h2 className={`text-5xl font-semibold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-16`}>Mes projets open source - Repos réels depuis l&apos;API GitHub</p>
          </motion.div>

          <GitHubRepos darkMode={darkMode} username="servantymatteo" />

          <div className="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GitHub Repo Card 1 */}
            <a
              href="https://github.com/yourusername/repo1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Portfolio</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Mon portfolio personnel construit avec Next.js, React et Tailwind CSS. Design moderne et responsive.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  <span>42</span>
                </div>
              </div>
            </a>

            {/* GitHub Repo Card 2 */}
            <a
              href="https://github.com/yourusername/repo2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Proxmox Scripts</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Collection de scripts Bash pour automatiser la gestion de l&apos;infrastructure Proxmox.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Bash</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  <span>28</span>
                </div>
              </div>
            </a>

            {/* GitHub Repo Card 3 */}
            <a
              href="https://github.com/yourusername/repo3"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Network Monitor</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Outil de monitoring réseau en Python avec interface web pour superviser l&apos;infrastructure.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  <span>15</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="experience" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Parcours</h2>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 sm:mb-16`}>Mon parcours chronologique complet</p>

          <div className="max-w-5xl mx-auto">
            {/* Grid Layout for larger screens, single column for mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">

              {/* Item 1 - BTS Actuel */}
              <motion.div
                className="relative group flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInLeft}
              >
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-blue-500 z-10">
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                </div>
                <div className={`${darkMode ? "bg-gray-800 border-blue-500/50" : "bg-white border-blue-200"} rounded-2xl p-6 sm:p-8 shadow-sm border-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex-1`}>
                  <div className="flex items-start gap-3 sm:gap-4 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">2025 – 2027</span>
                        <span className="text-xs text-blue-600 font-medium">En cours</span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-1`}>BTS SIO SISR</h3>
                      <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">M2S Formation – Vitrolles</p>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base`}>Services Informatiques aux Organisations, spécialité Solutions d&apos;Infrastructure, Systèmes et Réseaux.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Item 2 - Poste Actuel */}
              <motion.div
                className="relative group flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInRight}
              >
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-green-500 z-10">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
                <div className={`${darkMode ? "bg-gray-800 border-green-500/50" : "bg-white border-green-200"} rounded-2xl p-6 sm:p-8 shadow-sm border-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex-1`}>
                  <div className="flex items-start gap-3 sm:gap-4 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">Actuellement</span>
                        <span className="text-xs text-green-600 font-medium">Alternance</span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-1`}>Technicien Systèmes & Réseau</h3>
                      <p className="text-green-600 font-semibold mb-2 text-sm sm:text-base">Mairie de Septèmes-les-Vallons</p>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base`}>Administration système, support utilisateur, infrastructure réseau et virtualisation Proxmox.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Item 3 - Bachelor */}
              <div className="relative group flex">
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-blue-400 z-10"></div>
                <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl p-6 sm:p-8 shadow-sm border hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-1`}>
                  <div className="flex items-start gap-3 sm:gap-4 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-blue-400 to-cyan-400 flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className={`inline-block px-3 py-1 ${darkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-50 text-blue-700"} rounded-full text-xs font-semibold`}>2024</span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-1`}>Bachelor Logiciel & Réseau</h3>
                      <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">ESGI – Aix-en-Provence</p>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base`}>Gestion de projets informatiques, administration réseau et développement logiciel.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 - Webmaster */}
              <div className="relative group flex">
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-purple-500 z-10"></div>
                <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl p-6 sm:p-8 shadow-sm border hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-1`}>
                  <div className="flex items-start gap-3 sm:gap-4 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className={`inline-block px-3 py-1 ${darkMode ? "bg-purple-900/50 text-purple-300" : "bg-purple-50 text-purple-700"} rounded-full text-xs font-semibold`}>2023 – 2024</span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-1`}>Webmaster</h3>
                      <p className="text-purple-600 font-semibold mb-2 text-sm sm:text-base">Qirios – Full remote</p>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base`}>Développement web avec React et Tailwind CSS, optimisation SEO et gestion de contenu.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5 - Stage */}
              <div className="relative group flex">
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-gray-400 z-10"></div>
                <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl p-6 sm:p-8 shadow-sm border hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-1`}>
                  <div className="flex items-start gap-3 sm:gap-4 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className={`inline-block px-3 py-1 ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-xs font-semibold`}>Novembre 2022</span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-1`}>Stagiaire Web</h3>
                      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} font-semibold mb-2 text-sm sm:text-base`}>CSE Air France – Marignane</p>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base`}>Développement WordPress, création et envoi de newsletters, gestion de contenu.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 6 - Bac Pro */}
              <div className="relative group flex">
                <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-gray-500 z-10"></div>
                <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl p-6 sm:p-8 shadow-sm border hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-1`}>
                  <div className="flex items-start gap-3 sm:gap-4 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-gray-500 to-gray-700 flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className={`inline-block px-3 py-1 ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-xs font-semibold`}>2020 – 2024</span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-1`}>Bac Pro SN</h3>
                      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} font-semibold mb-2 text-sm sm:text-base`}>Lycée Pierre Mendès France – Vitrolles</p>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm sm:text-base`}>Systèmes Numériques option Réseaux Informatiques et Systèmes Communicants. Mention Bien.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className={`py-20 px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className={`text-5xl font-semibold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Compétences</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-16`}>Mes domaines d&apos;expertise technique</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Développement */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-500 to-pink-500 p-8 cursor-pointer hover:scale-[0.99] transition-all duration-300">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6">Développement</h3>
                <div className="space-y-3">
                  {['React', 'Next.js', 'Flutter', 'Tailwind', 'PocketBase'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      <span className="text-white/90 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Systèmes & Réseau */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-500 to-cyan-500 p-8 cursor-pointer hover:scale-[0.99] transition-all duration-300">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6">Systèmes & Réseau</h3>
                <div className="space-y-3">
                  {['Proxmox', 'VPN', 'Linux', 'Reverse Proxy', 'Virtualisation'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      <span className="text-white/90 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-green-500 to-emerald-500 p-8 cursor-pointer hover:scale-[0.99] transition-all duration-300">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6">Support</h3>
                <div className="space-y-3">
                  {['HelpDesk', 'Diagnostic', 'Sécurité IT', 'Relation client'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      <span className="text-white/90 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veille Informatique Section */}
      <section id="veille" className={`py-20 px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-linear-to-b from-white to-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl font-semibold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Veille Informatique</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-16`}>Actualités et découvertes technologiques</p>

          <div className="space-y-4">
            {/* Article Featured */}
            <article
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-500 to-cyan-500 p-8 lg:p-12 cursor-pointer hover:scale-[0.99] transition-transform duration-300"
              onClick={() => setSelectedArticle(articles[0].id)}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {articles[0].category}
                  </span>
                  <span className="text-white/70 text-sm">{articles[0].date}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-3xl">
                  {articles[0].excerpt} Entre Kubernetes, les microservices et l&apos;edge computing, découvrez les tendances qui façonnent l&apos;avenir du cloud.
                </p>
                <div className="inline-flex items-center text-white font-medium">
                  Lire l&apos;article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
            </article>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Article 2 */}
              <article
                className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-green-500 to-emerald-500 p-8 cursor-pointer hover:scale-[0.99] transition-transform duration-300"
                onClick={() => setSelectedArticle(articles[1].id)}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {articles[1].category}
                    </span>
                    <span className="text-white/70 text-sm">{articles[1].date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {articles[1].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    {articles[1].excerpt}
                  </p>
                  <div className="inline-flex items-center text-white font-medium text-sm">
                    Lire l&apos;article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              </article>

              {/* Article 3 */}
              <article
                className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-500 to-pink-500 p-8 cursor-pointer hover:scale-[0.99] transition-transform duration-300"
                onClick={() => setSelectedArticle(articles[2].id)}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {articles[2].category}
                    </span>
                    <span className="text-white/70 text-sm">{articles[2].date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {articles[2].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    {articles[2].excerpt}
                  </p>
                  <div className="inline-flex items-center text-white font-medium text-sm">
                    Lire l&apos;article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>En chiffres</h2>
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 sm:mb-16`}>Quelques statistiques sur mon parcours</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {/* Stat 1 */}
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 p-6 sm:p-8 text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter end={3} suffix="+" duration={2.5} />
                </div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Projets réalisés</div>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 p-6 sm:p-8 text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter end={2} suffix="+" duration={2.5} />
                </div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Années d&apos;études</div>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 p-6 sm:p-8 text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter end={3} duration={2.5} />
                </div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Expériences pro</div>
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={scaleIn}
              className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-500 to-red-500 p-6 sm:p-8 text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter end={10} suffix="+" duration={2.5} />
                </div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className={`text-5xl font-semibold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Certifications</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-16`}>Mes certifications et formations professionnelles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certification 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Cisco CCNA</h3>
                  <p className="text-sm text-gray-600">Cisco Systems</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Certification réseau couvrant les fondamentaux des réseaux, la sécurité, et l&apos;automatisation.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">En cours</span>
                <span className="text-xs text-gray-500">2025</span>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Proxmox VE</h3>
                  <p className="text-sm text-gray-600">Proxmox Server Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Expertise en virtualisation et gestion d&apos;infrastructure avec Proxmox VE.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">En cours</span>
                <span className="text-xs text-gray-500">2025</span>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">React Developer</h3>
                  <p className="text-sm text-gray-600">Meta / Coursera</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">Certification développement d&apos;applications web modernes avec React et Next.js.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">En cours</span>
                <span className="text-xs text-gray-500">2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-500 to-purple-600 p-12 lg:p-16">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-white">
                Restons en contact
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
                Intéressé par une collaboration ou simplement pour discuter de technologie ?
                N&apos;hésitez pas à me contacter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="mailto:contact@matteoservanty.com"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  M&apos;envoyer un email
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>


      {/* Snake Game Easter Egg */}
      <AnimatePresence>
        {showSnake && (
          <SnakeGame onClose={() => setShowSnake(false)} darkMode={darkMode} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`py-12 px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>© 2024 Matteo Servanty. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              layoutId={`project-${selectedProject}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
              >
                {/* Header with gradient */}
                <div className={`relative h-48 bg-linear-to-br ${selectedProjectData.gradient} p-8 flex flex-col justify-end`}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center text-white"
                    aria-label="Fermer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="text-white">
                    <div className="text-sm font-medium opacity-90 mb-2">{selectedProjectData.category}</div>
                    <h2 className="text-4xl font-semibold">{selectedProjectData.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(85vh-12rem)]">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedProjectData.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Description détaillée</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProjectData.details}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technologies utilisées</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && selectedArticleData && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedArticle(null)}
            />

            {/* Modal */}
            <motion.div
              layoutId={`article-${selectedArticle}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
              >
                {/* Header with gradient */}
                <div className={`relative h-48 bg-linear-to-br ${selectedArticleData.gradient} p-8 flex flex-col justify-end`}>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center text-white"
                    aria-label="Fermer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium opacity-90">{selectedArticleData.category}</span>
                      <span className="text-sm opacity-70">{selectedArticleData.date}</span>
                    </div>
                    <h2 className="text-4xl font-semibold">{selectedArticleData.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(85vh-12rem)]">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                    {selectedArticleData.excerpt}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Article complet</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedArticleData.content}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Mots-clés</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedArticleData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}