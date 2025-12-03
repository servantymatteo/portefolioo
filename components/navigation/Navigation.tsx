'use client';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-green-500/30 z-50 font-mono shadow-[0_4px_20px_rgba(0,255,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold tracking-tight text-green-400 flex items-center gap-2">
            <span className="text-green-500">[</span>MS<span className="text-green-500">]</span>
            <span className="text-green-400 animate-pulse">●</span>
            <span className="text-xs text-green-400/70">ONLINE</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
            <a href="#about" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} ABOUT
            </a>
            <a href="#projects" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} PROJETS
            </a>
            <a href="#github" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} GITHUB
            </a>
            <a href="#experience" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} XP
            </a>
            <a href="#competences" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} SKILLS
            </a>
            <a href="#veille" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} VEILLE
            </a>
            <a href="#stats" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} STATS
            </a>
            <a href="#certifications" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} CERTIFS
            </a>
            <a href="#contact" className="text-green-400 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {'>'} CONTACT
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:scale-110 transition-all duration-300"
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

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="lg:hidden p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:scale-110 transition-all duration-300"
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
  );
}
