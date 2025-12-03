'use client';

import { motion } from 'framer-motion';
import GitHubStats from '@/components/ui/GitHubStats';
import GlitchText from '@/components/effects/GlitchText';
import { fadeInUp } from '@/lib/animations/variants';

export default function GitHubStatsSection() {
  return (
    <section id="github-stats" className="py-20 px-6 lg:px-8 bg-black border-t border-green-500/30 relative overflow-hidden">
      {/* Scan Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-black tracking-tight mb-4 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
            <GlitchText className="text-green-400">
              {'>'}{'>'}  GITHUB STATS - ACTIVITY LOG
            </GlitchText>
          </h2>
          <p className="text-xl text-cyan-400 mb-16 font-mono">My coding journey in real-time</p>
        </motion.div>

        <GitHubStats username="servantymatteo" />
      </div>
    </section>
  );
}
