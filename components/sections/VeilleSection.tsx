'use client';

import { articles, type Article } from '@/lib/data/articles';

interface VeilleSectionProps {
  setSelectedArticle: (id: number) => void;
}

export default function VeilleSection({ setSelectedArticle }: VeilleSectionProps) {
  return (
    <section id="veille" className="py-20 px-6 lg:px-8 bg-black border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black tracking-tight mb-4 text-cyan-400 font-mono drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          {'>'}{'>'}  VEILLE TECH - NEWS FEED
        </h2>
        <p className="text-xl text-green-400 mb-16 font-mono">Les dernières actus tech - stay updated</p>

        <div className="space-y-4">
          {/* Article Featured */}
          <article
            className="group relative overflow-hidden rounded-3xl bg-black/90 border-2 border-cyan-500/50 backdrop-blur-sm hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] p-8 lg:p-12 cursor-pointer hover:scale-[1.01] transition-all duration-300"
            onClick={() => setSelectedArticle(articles[0].id)}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(34,211,238,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-sm rounded-full text-xs font-bold text-cyan-300 font-mono shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                  {articles[0].category}
                </span>
                <span className="text-gray-400 text-sm font-mono">{articles[0].date}</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-cyan-400 mb-4 font-mono drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                {'>'} {articles[0].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl font-mono">
                {articles[0].excerpt} Entre Kubernetes, les microservices et l&apos;edge computing, découvrez les tendances qui façonnent l&apos;avenir du cloud.
              </p>
              <div className="inline-flex items-center text-cyan-400 font-bold font-mono hover:text-cyan-300 transition-colors">
                {'>'} READ_MORE.exe
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Article 2 */}
            <article
              className="group relative overflow-hidden rounded-3xl bg-black/90 border-2 border-green-500/50 backdrop-blur-sm hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] p-8 cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => setSelectedArticle(articles[1].id)}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(34,197,94,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 border border-green-400/50 backdrop-blur-sm rounded-full text-xs font-bold text-green-300 font-mono shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    {articles[1].category}
                  </span>
                  <span className="text-gray-400 text-sm font-mono">{articles[1].date}</span>
                </div>
                <h3 className="text-2xl font-black text-green-400 mb-3 font-mono drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  {'>'} {articles[1].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 font-mono">
                  {articles[1].excerpt}
                </p>
                <div className="inline-flex items-center text-green-400 font-bold font-mono text-sm hover:text-green-300 transition-colors">
                  {'>'} READ_MORE.exe
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article
              className="group relative overflow-hidden rounded-3xl bg-black/90 border-2 border-purple-500/50 backdrop-blur-sm hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] p-8 cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => setSelectedArticle(articles[2].id)}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(168,85,247,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 backdrop-blur-sm rounded-full text-xs font-bold text-purple-300 font-mono shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    {articles[2].category}
                  </span>
                  <span className="text-gray-400 text-sm font-mono">{articles[2].date}</span>
                </div>
                <h3 className="text-2xl font-black text-purple-400 mb-3 font-mono drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  {'>'} {articles[2].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 font-mono">
                  {articles[2].excerpt}
                </p>
                <div className="inline-flex items-center text-purple-400 font-bold font-mono text-sm hover:text-purple-300 transition-colors">
                  {'>'} READ_MORE.exe
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
