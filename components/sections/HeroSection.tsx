'use client';

import TypingAnimation from '@/components/TypingAnimation';

interface HeroSectionProps {
  setShowSnake: (show: boolean) => void;
}

export default function HeroSection({ setShowSnake }: HeroSectionProps) {
  return (
    <section id="about" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-none font-mono">
            <span className="text-green-400">{'>'}_</span> <span className="text-white">salut, c'est</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 mt-2 animate-pulse">
              Matteo Servanty
            </span>
          </h1>
          <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-green-400 leading-relaxed font-mono max-w-3xl">
            <TypingAnimation
              text="Dev fullstack qui tryhard H24 sur le code et le réseau. J'farm l'XP en cloud & infratech."
              speed={30}
            />
          </div>

          {/* Gamer Stats Badges */}
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
            <div className="px-4 py-2 bg-green-500/20 border border-green-500 rounded text-green-400 hover:bg-green-500/30 transition-all hover:scale-105">
              <span className="opacity-60">STATUS:</span> <span className="font-bold">ONLINE 🟢</span>
            </div>
            <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-400 hover:bg-cyan-500/30 transition-all hover:scale-105">
              <span className="opacity-60">RANK:</span> <span className="font-bold">CHALLENGER 💎</span>
            </div>
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded text-purple-400 hover:bg-purple-500/30 transition-all hover:scale-105">
              <span className="opacity-60">SKILL:</span> <span className="font-bold">GOD TIER ⚡</span>
            </div>
          </div>

          <button
            onClick={() => setShowSnake(true)}
            className="opacity-0 hover:opacity-100 transition-opacity mt-8 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-semibold border border-green-400 font-mono"
            title="Easter Egg: Snake Game!"
          >
            🐍 SNAKE GAME - EZ CLAP
          </button>
        </div>
      </div>
    </section>
  );
}
