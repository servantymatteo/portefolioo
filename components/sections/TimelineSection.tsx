'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animations/variants';

export default function TimelineSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-purple-400 font-mono drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
          {'>'}{'>'}  PARCOURS - MA PROGRESSION
        </h2>
        <p className="text-lg sm:text-xl text-green-400 mb-12 sm:mb-16 font-mono">De noob à tryharder - mon grind</p>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-400 via-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>

          <div className="space-y-8 lg:space-y-12">

            {/* BTS SIO - RIGHT */}
            <motion.div
              className="relative lg:grid lg:grid-cols-2 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
            >
              <motion.div className="hidden lg:flex justify-end items-start pt-8 pr-8">
                <div className="text-right text-gray-400">
                  <div className="text-2xl font-bold font-mono">2025</div>
                  <div className="text-sm font-mono">En cours</div>
                </div>
              </motion.div>

              <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-green-400 border-4 border-black z-20 shadow-[0_0_15px_rgba(34,197,94,0.8)]">
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
              </div>

              <div className="relative">
                <div className="bg-black/80 border-green-500/50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:scale-[1.03] hover:border-green-400 transition-all duration-300 group backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-green-500/20 border border-green-500 text-green-400 rounded-full text-xs font-bold font-mono">2025 – 2027</span>
                        <span className="inline-flex items-center gap-1 text-xs text-green-400 font-bold font-mono">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          EN COURS
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-green-400 mb-1 font-mono">BTS SIO SISR</h3>
                      <p className="text-cyan-400 font-bold mb-3 font-mono">M2S Formation – Vitrolles</p>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        Services Informatiques aux Organisations, spécialité Solutions d&apos;Infrastructure, Systèmes et Réseaux.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Poste Actuel - LEFT */}
            <motion.div
              className="relative lg:grid lg:grid-cols-2 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
            >
              <div className="relative lg:col-start-1">
                <div className="bg-black/80 border-green-500/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:scale-[1.03] hover:border-green-400 transition-all duration-300 group lg:text-right">
                  <div className="flex items-start gap-4 lg:flex-row-reverse">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2 lg:justify-end">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-full text-xs font-bold font-mono">ACTUELLEMENT</span>
                        <span className="inline-flex items-center gap-1 text-xs text-cyan-400 font-bold font-mono">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                          ALTERNANCE
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-cyan-400 mb-1 font-mono">Technicien Systèmes & Réseau</h3>
                      <p className="text-green-400 font-bold mb-3 font-mono">Mairie de Septèmes-les-Vallons</p>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        Administration système, support utilisateur, infrastructure réseau et virtualisation Proxmox.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-green-500 border-4 border-black z-20 shadow-[0_0_15px_rgba(34,197,94,0.8)]">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
              </div>

              <motion.div className="hidden lg:flex justify-start items-start pt-8 pl-8">
                <div className="text-left text-gray-400">
                  <div className="text-2xl font-bold font-mono">2025</div>
                  <div className="text-sm font-mono">Alternance</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bachelor - RIGHT */}
            <motion.div
              className="relative lg:grid lg:grid-cols-2 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
            >
              <motion.div className="hidden lg:flex justify-end items-start pt-8 pr-8">
                <div className="text-right text-gray-400">
                  <div className="text-2xl font-bold font-mono">2024</div>
                  <div className="text-sm font-mono">Formation</div>
                </div>
              </motion.div>

              <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-black shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"></div>

              <div className="relative">
                <div className="bg-black/80 border-cyan-500/50 backdrop-blur-sm hover:border-cyan-400 rounded-2xl p-6 sm:p-8 shadow-lg border-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:scale-[1.03] transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-full text-xs font-bold font-mono">2024</span>
                      </div>
                      <h3 className="text-2xl font-black text-cyan-400 mb-1 font-mono">Bachelor Logiciel & Réseau</h3>
                      <p className="text-purple-400 font-bold mb-3 font-mono">ESGI – Aix-en-Provence</p>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        Gestion de projets informatiques, administration réseau et développement logiciel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Webmaster - LEFT */}
            <motion.div
              className="relative lg:grid lg:grid-cols-2 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
            >
              <div className="relative lg:col-start-1">
                <div className="bg-black/80 border-purple-500/50 backdrop-blur-sm hover:border-purple-400 rounded-2xl p-6 sm:p-8 shadow-lg border-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-[1.03] transition-all duration-300 group lg:text-right">
                  <div className="flex items-start gap-4 lg:flex-row-reverse">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2 lg:justify-end">
                        <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500 text-purple-400 rounded-full text-xs font-bold font-mono">2023 – 2024</span>
                      </div>
                      <h3 className="text-2xl font-black text-purple-400 mb-1 font-mono">Webmaster</h3>
                      <p className="text-pink-400 font-bold mb-3 font-mono">Qirios – Full remote</p>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        Développement web avec React et Tailwind CSS, optimisation SEO et gestion de contenu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-purple-400 border-4 border-black shadow-[0_0_15px_rgba(168,85,247,0.8)] z-20"></div>

              <motion.div className="hidden lg:flex justify-start items-start pt-8 pl-8">
                <div className="text-left text-gray-400">
                  <div className="text-2xl font-bold font-mono">2023</div>
                  <div className="text-sm font-mono">Emploi</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stage - RIGHT */}
            <motion.div
              className="relative lg:grid lg:grid-cols-2 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
            >
              <motion.div className="hidden lg:flex justify-end items-start pt-8 pr-8">
                <div className="text-right text-gray-400">
                  <div className="text-2xl font-bold font-mono">2022</div>
                  <div className="text-sm font-mono">Stage</div>
                </div>
              </motion.div>

              <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-orange-400 border-4 border-black shadow-[0_0_15px_rgba(251,146,60,0.8)] z-20"></div>

              <div className="relative">
                <div className="bg-black/80 border-orange-500/50 backdrop-blur-sm hover:border-orange-400 rounded-2xl p-6 sm:p-8 shadow-lg border-2 hover:shadow-[0_0_25px_rgba(251,146,60,0.5)] hover:scale-[1.03] transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500 text-orange-400 rounded-full text-xs font-bold font-mono">Novembre 2022</span>
                      </div>
                      <h3 className="text-2xl font-black text-orange-400 mb-1 font-mono">Stagiaire Web</h3>
                      <p className="text-yellow-400 font-bold mb-3 font-mono">CSE Air France – Marignane</p>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        Développement WordPress, création et envoi de newsletters, gestion de contenu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bac Pro - LEFT */}
            <motion.div
              className="relative lg:grid lg:grid-cols-2 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
            >
              <div className="relative lg:col-start-1">
                <div className="bg-black/80 border-indigo-500/50 backdrop-blur-sm hover:border-indigo-400 rounded-2xl p-6 sm:p-8 shadow-lg border-2 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-[1.03] transition-all duration-300 group lg:text-right">
                  <div className="flex items-start gap-4 lg:flex-row-reverse">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2 lg:justify-end">
                        <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500 text-indigo-400 rounded-full text-xs font-bold font-mono">2020 – 2024</span>
                      </div>
                      <h3 className="text-2xl font-black text-indigo-400 mb-1 font-mono">Bac Pro SN</h3>
                      <p className="text-blue-400 font-bold mb-3 font-mono">Lycée Pierre Mendès France – Vitrolles</p>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        Systèmes Numériques option Réseaux Informatiques et Systèmes Communicants. Mention Bien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-black shadow-[0_0_15px_rgba(99,102,241,0.8)] z-20"></div>

              <motion.div className="hidden lg:flex justify-start items-start pt-8 pl-8">
                <div className="text-left text-gray-400">
                  <div className="text-2xl font-bold font-mono">2020</div>
                  <div className="text-sm font-mono">Bac Pro</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
