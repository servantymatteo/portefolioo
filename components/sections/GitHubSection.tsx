'use client';

import { motion } from 'framer-motion';
import GitHubRepos from '@/components/GitHubRepos';
import { staggerContainer } from '@/lib/animations/variants';

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 px-6 lg:px-8 bg-black border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="text-5xl font-black tracking-tight mb-4 text-cyan-400 font-mono drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            {'>'}{'>'}  GITHUB - CODE REPOS
          </h2>
          <p className="text-xl text-green-400 mb-16 font-mono">Mes projets open source - API GitHub en live</p>
        </motion.div>

        <GitHubRepos username="servantymatteo" />
      </div>
    </section>
  );
}
