'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GitHubStatsProps {
  username: string;
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  const [stats, setStats] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-black/80 border-2 border-gray-700/50 rounded-xl p-6 animate-pulse">
            <div className="h-8 bg-gray-700/50 rounded w-1/2 mb-2"></div>
            <div className="h-12 bg-gray-700/50 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statCards = [
    {
      label: 'Total Repos',
      value: stats.public_repos,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      color: 'cyan',
      borderColor: 'border-cyan-500/50 hover:border-cyan-400',
      glowColor: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]',
      textColor: 'text-cyan-400',
    },
    {
      label: 'Followers',
      value: stats.followers,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'purple',
      borderColor: 'border-purple-500/50 hover:border-purple-400',
      glowColor: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]',
      textColor: 'text-purple-400',
    },
    {
      label: 'Following',
      value: stats.following,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'green',
      borderColor: 'border-green-500/50 hover:border-green-400',
      glowColor: 'hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]',
      textColor: 'text-green-400',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden bg-black/80 backdrop-blur-sm border-2 ${stat.borderColor} ${stat.glowColor} rounded-xl p-6 transition-all duration-300 hover:scale-105 group`}
          >
            {/* Scan lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className={`${stat.textColor}`}>
                  {stat.icon}
                </div>
              </div>
              <div className={`text-4xl font-black font-mono ${stat.textColor} drop-shadow-[0_0_10px_currentColor]`}>
                {stat.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Stats Image (using github-readme-stats) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden bg-black/80 backdrop-blur-sm border-2 border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] rounded-xl p-6 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

        <h3 className="text-xl font-black text-cyan-400 mb-4 font-mono drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          {'>'} CONTRIBUTION STATS
        </h3>

        <div className="flex flex-col gap-4">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=a3a3a3&icon_color=22c55e`}
            alt="GitHub Stats"
            className="w-full rounded-lg"
          />

          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=00000000&ring=22d3ee&fire=22d3ee&currStreakLabel=22d3ee&sideLabels=22c55e`}
            alt="GitHub Streak"
            className="w-full rounded-lg"
          />

          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=a3a3a3`}
            alt="Top Languages"
            className="w-full rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}
