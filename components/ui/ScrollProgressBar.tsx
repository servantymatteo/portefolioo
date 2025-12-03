'use client';

import { motion } from 'framer-motion';

interface ScrollProgressBarProps {
  scrollProgress: number;
}

export default function ScrollProgressBar({ scrollProgress }: ScrollProgressBarProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 origin-left z-[100] shadow-[0_0_10px_rgba(34,197,94,0.8)]"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
