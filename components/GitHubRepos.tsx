'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

interface GitHubReposProps {
  username?: string;
}

export default function GitHubRepos({ username = 'matteoservanty' }: GitHubReposProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter((repo: Repo) => !repo.name.includes('fork')));
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [username]);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'text-yellow-400 border-yellow-500/50',
      TypeScript: 'text-blue-400 border-blue-500/50',
      Python: 'text-green-400 border-green-500/50',
      Bash: 'text-gray-400 border-gray-500/50',
      HTML: 'text-orange-400 border-orange-500/50',
      CSS: 'text-purple-400 border-purple-500/50',
      Go: 'text-cyan-400 border-cyan-500/50',
      Rust: 'text-red-400 border-red-500/50',
    };
    return colors[language] || 'text-gray-400 border-gray-500/50';
  };

  const getBorderColor = (index: number) => {
    const colors = [
      'border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]',
      'border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]',
      'border-green-500/50 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]',
      'border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]',
      'border-pink-500/50 hover:border-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]',
      'border-indigo-500/50 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]',
    ];
    return colors[index % colors.length];
  };

  const getIconGradient = (index: number) => {
    const gradients = [
      'from-cyan-500 to-blue-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-pink-500 to-rose-500',
      'from-indigo-500 to-blue-500',
    ];
    return gradients[index % gradients.length];
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-black/80 border-2 border-gray-700/50 backdrop-blur-sm animate-pulse"
          >
            <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-700/50 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 font-mono font-bold text-lg">{'>'} ERROR: API GitHub inaccessible</p>
        <p className="text-gray-400 text-sm mt-2 font-mono">Retry in progress...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.slice(0, 6).map((repo, index) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.03, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className={`group relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm border-2 ${getBorderColor(index)} p-6 transition-all duration-300`}
        >
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getIconGradient(index)} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <motion.svg
                className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3, y: -3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </div>

            <h3 className="text-lg font-black mb-2 text-cyan-400 truncate font-mono drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              {'>'} {repo.name}
            </h3>
            <p className="text-sm text-gray-300 mb-4 line-clamp-2 h-10 font-mono">
              {repo.description || 'No description available'}
            </p>

            <div className="flex items-center gap-4 text-sm font-mono">
              {repo.language && (
                <div className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full border ${getLanguageColor(repo.language)} shadow-[0_0_8px_currentColor]`}></div>
                  <span className={getLanguageColor(repo.language).split(' ')[0]}>{repo.language}</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-yellow-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                </svg>
                <span className="font-bold">{repo.stargazers_count}</span>
              </div>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.a>
      ))}
    </div>
  );
}
