'use client';

import { ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 z-0 text-cyan-400 opacity-70"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          animation: 'glitch-1 3s infinite linear alternate-reverse',
        }}
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 z-0 text-pink-400 opacity-70"
        style={{
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          animation: 'glitch-2 2.5s infinite linear alternate-reverse',
        }}
      >
        {children}
      </span>

      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% {
            transform: translate(0);
          }
          33% {
            transform: translate(-2px, 2px);
          }
          66% {
            transform: translate(2px, -1px);
          }
        }

        @keyframes glitch-2 {
          0%, 100% {
            transform: translate(0);
          }
          33% {
            transform: translate(2px, -2px);
          }
          66% {
            transform: translate(-2px, 1px);
          }
        }
      `}</style>
    </div>
  );
}
