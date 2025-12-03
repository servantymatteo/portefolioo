'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/variants';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 lg:px-8 bg-black border-t border-green-500/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-black tracking-tight mb-4 text-green-400 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
            {'>'}{'>'}  CERTIFS - MES ACHIEVEMENTS
          </h2>
          <p className="text-xl text-cyan-400 mb-16 font-mono">Les badges unlock - en cours de farm</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certification 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-black/80 border-2 border-purple-500/50 backdrop-blur-sm hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-400 mb-1">Cisco CCNA</h3>
                <p className="text-sm text-gray-300">Cisco Systems</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">Certification réseau couvrant les fondamentaux des réseaux, la sécurité, et l&apos;automatisation.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-purple-400 bg-purple-500/20 border border-purple-500 px-3 py-1 rounded-full">En cours</span>
              <span className="text-xs text-cyan-400">2025</span>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-black/80 border-2 border-purple-500/50 backdrop-blur-sm hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-400 mb-1">Proxmox VE</h3>
                <p className="text-sm text-gray-300">Proxmox Server Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">Expertise en virtualisation et gestion d&apos;infrastructure avec Proxmox VE.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-purple-400 bg-purple-500/20 border border-purple-500 px-3 py-1 rounded-full">En cours</span>
              <span className="text-xs text-cyan-400">2025</span>
            </div>
          </div>

          {/* Certification 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-black/80 border-2 border-purple-500/50 backdrop-blur-sm hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-400 mb-1">React Developer</h3>
                <p className="text-sm text-gray-300">Meta / Coursera</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">Certification développement d&apos;applications web modernes avec React et Next.js.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-purple-400 bg-purple-500/20 border border-purple-500 px-3 py-1 rounded-full">En cours</span>
              <span className="text-xs text-cyan-400">2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
