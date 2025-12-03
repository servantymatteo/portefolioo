'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations/variants';

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-purple-400 font-mono drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            {'>'}{'>'}  STATS - MES NUMBERS
          </h2>
          <p className="text-lg sm:text-xl text-green-400 mb-12 sm:mb-16 font-mono">KDA de mon parcours tech - GG WP</p>
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
            className="relative overflow-hidden rounded-2xl bg-black/80 border-2 border-green-500/50 p-6 sm:p-8 text-white hover:scale-105 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 opacity-10 text-green-400">
              <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-green-400 font-mono">
                <AnimatedCounter end={3} suffix="+" duration={2.5} />
              </div>
              <div className="text-green-400/80 font-bold text-sm sm:text-base font-mono">PROJETS RÉALISÉS</div>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={scaleIn}
            className="relative overflow-hidden rounded-2xl bg-black/80 border-2 border-cyan-500/50 p-6 sm:p-8 text-white hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 opacity-10 text-cyan-400">
              <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-cyan-400 font-mono">
                <AnimatedCounter end={2} suffix="+" duration={2.5} />
              </div>
              <div className="text-cyan-400/80 font-bold text-sm sm:text-base font-mono">ANNÉES D&apos;ÉTUDES</div>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            variants={scaleIn}
            className="relative overflow-hidden rounded-2xl bg-black/80 border-2 border-purple-500/50 p-6 sm:p-8 text-white hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 opacity-10 text-purple-400">
              <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-purple-400 font-mono">
                <AnimatedCounter end={3} duration={2.5} />
              </div>
              <div className="text-purple-400/80 font-bold text-sm sm:text-base font-mono">EXPÉRIENCES PRO</div>
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            variants={scaleIn}
            className="relative overflow-hidden rounded-2xl bg-black/80 border-2 border-green-500/50 p-6 sm:p-8 text-white hover:scale-105 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 opacity-10 text-green-400">
              <svg className="w-24 h-24 sm:w-32 sm:h-32" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="relative">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-green-400 font-mono">
                <AnimatedCounter end={10} suffix="+" duration={2.5} />
              </div>
              <div className="text-green-400/80 font-bold text-sm sm:text-base font-mono">TECHNOLOGIES</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
