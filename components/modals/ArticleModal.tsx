'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Article } from '@/lib/data/articles';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  if (!article) return null;

  return (
    <AnimatePresence>
      {article && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            layoutId={`article-${article.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="bg-black/95 border-2 border-cyan-500/50 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.3)] max-w-4xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
            >
              {/* Header - Black with cyan neon */}
              <div className="relative h-48 bg-black/90 border-b-2 border-cyan-500/30 p-8 flex flex-col justify-end">
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(34,211,238,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 backdrop-blur-sm hover:bg-red-500/30 hover:border-red-400 transition-all flex items-center justify-center text-red-400 hover:text-red-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  aria-label="Fermer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-white relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold opacity-90 text-cyan-400 font-mono uppercase tracking-wider">{article.category}</span>
                    <span className="text-xs opacity-70 text-green-400 font-mono">{article.date}</span>
                  </div>
                  <h2 className="text-4xl font-black text-cyan-400 font-mono drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">{article.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(85vh-12rem)] bg-black/60">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed italic border-l-4 border-cyan-500/50 pl-4">
                  {article.excerpt}
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-4 text-green-400 font-mono">{'>'} ARTICLE COMPLET</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {article.content}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black mb-3 text-purple-400 font-mono">{'>'} MOTS-CLÉS</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-lg text-sm font-bold font-mono hover:bg-cyan-500/20 hover:border-cyan-400 transition-all hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
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
  );
}
