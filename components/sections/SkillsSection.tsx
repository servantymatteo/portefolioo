'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export default function SkillsSection() {
  return (
    <section id="competences" className="py-20 px-6 lg:px-8 bg-black border-t border-green-500/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-black tracking-tight mb-4 text-green-400 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
            {'>'}{'>'}  SKILLS - MON LOADOUT
          </h2>
          <p className="text-xl text-cyan-400 mb-16 font-mono">Les techs où j&apos;ai farmer l&apos;XP</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Développement */}
          <div className="group relative overflow-hidden rounded-3xl bg-black/80 border-2 border-purple-500/50 backdrop-blur-sm hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] p-8 cursor-pointer hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(168,85,247,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/50 backdrop-blur-sm flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-purple-400 mb-6 font-mono drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">{'>'} Développement</h3>
              <div className="space-y-3">
                {['React', 'Next.js', 'Flutter', 'Tailwind', 'PocketBase'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400/80 shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
                    <span className="text-gray-300 font-medium font-mono group-hover/item:text-purple-300 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Systèmes & Réseau */}
          <div className="group relative overflow-hidden rounded-3xl bg-black/80 border-2 border-cyan-500/50 backdrop-blur-sm hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] p-8 cursor-pointer hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(34,211,238,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-sm flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-cyan-400 mb-6 font-mono drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{'>'} Systèmes & Réseau</h3>
              <div className="space-y-3">
                {['Proxmox', 'VPN', 'Linux', 'Reverse Proxy', 'Virtualisation'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                    <span className="text-gray-300 font-medium font-mono group-hover/item:text-cyan-300 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="group relative overflow-hidden rounded-3xl bg-black/80 border-2 border-green-500/50 backdrop-blur-sm hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] p-8 cursor-pointer hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(34,197,94,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-400/50 backdrop-blur-sm flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-green-400 mb-6 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">{'>'} Support</h3>
              <div className="space-y-3">
                {['HelpDesk', 'Diagnostic', 'Sécurité IT', 'Relation client'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                    <span className="text-gray-300 font-medium font-mono group-hover/item:text-green-300 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
