'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

interface TerminalProps {
  onClose: () => void;
}

export default function Terminal({ onClose }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Terminal v1.0.0 - Matteo Servanty Portfolio' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: { [key: string]: () => string } = {
    // --- COMMANDES PUBLIQUES (Visibles dans help) ---
    help: () => `Available commands:
  help        - Show this help message
  about       - About me
  skills      - List my technical skills
  projects    - Show my projects
  contact     - Get my contact info
  github      - Open my GitHub profile
  clear       - Clear terminal
  exit        - Close terminal`,

    about: () => `Matteo Servanty - Dev Fullstack & SysAdmin
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: BTS SIO SISR Student (2025-2027)
Role: Technicien Systèmes & Réseau @ Mairie
Location: Vitrolles, France
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passionné par le code et les infrastructures réseau.
Je code en React, Next.js et gère du Proxmox/Linux au quotidien.`,

    skills: () => `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Development]
  → React, Next.js, TypeScript
  → Flutter, Tailwind CSS
  → PocketBase

[Systems & Network]
  → Proxmox, Linux, VPN
  → Active Directory
  → Reverse Proxy, Virtualisation

[Support]
  → HelpDesk, Diagnostic
  → Cybersécurité IT
  → Relation client`,

    projects: () => `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Infrastructure Cloud
   → AWS, Terraform, Kubernetes, Docker

2. Application Web
   → React, Next.js, TypeScript, Tailwind

3. Automatisation DevOps
   → GitHub Actions, Python, Bash, Ansible

4. Sécurité Réseau
   → pfSense, OpenVPN, Wireshark, Suricata

5. API REST
   → Node.js, Express, PostgreSQL, Redis`,

    contact: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: matteoservanty.pro@gmail.com
GitHub: github.com/servantymatteo
LinkedIn: linkedin.com/in/matteo-servanty
Twitter: @servantymatteo`,

    github: () => {
      window.open('https://github.com/servantymatteo', '_blank');
      return 'Opening GitHub profile...';
    },

    clear: () => {
      setHistory([]);
      return '';
    },

    exit: () => {
      onClose();
      return 'Closing terminal...';
    },

    // --- COMMANDES SECRÈTES (Easter Eggs) ---
    
    ls: () => `total 42
drwxr-xr-x  2 matteo  staff   64B Dec 3 10:00 .
drwxr-xr-x  4 matteo  staff  128B Dec 3 10:00 ..
-rw-r--r--  1 matteo  staff   12B Dec 3 10:00 secrets.txt
-rw-r--r--  1 matteo  staff  102K Dec 3 10:00 salary_expectations.pdf
-rw-r--r--  1 matteo  staff   3KB Dec 3 10:00 resume.pdf`,

    'cat secrets.txt': () => `🔓 SECRET UNLOCKED!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You found the hidden file!
Fun fact: I prefer Tabs over Spaces.
(And yes, I use dark mode everywhere.)`,

    sudo: () => `root@portfolio's password:
********
Sorry, try again. (User is not in the sudoers file. This incident will be reported.) 🚫`,

    whoami: () => `visitor@portfolio
(Currently browsing the awesome portfolio of Matteo Servanty)`,

    vim: () => `E325: ATTENTION
Found a swap file by the name ".portfolio.swp"
...
Just kidding. You can't exit Vim. Ever. 😈
(Try 'clear' to escape)`,

    vi: () => `Hint: It's 2025, try 'vim' or better yet, 'code' 😉`,
    
    emacs: () => `Error: System out of memory.`,

    date: () => new Date().toString(),

    'rm -rf': () => `⚠️  PERMISSION DENIED
Nice try, but I need this portfolio to get hired!`,
    
    'rm -rf /': () => `⚠️  PERMISSION DENIED
Nice try, but I need this portfolio to get hired!`,
  };

  const executeCommand = (cmd: string) => {
    // Nettoyage de la commande (minuscules, espaces)
    const trimmedCmd = cmd.trim().toLowerCase();

    // Ajout de la ligne d'input
    setHistory(prev => [...prev, { type: 'input', content: `$ ${cmd}` }]);

    if (trimmedCmd === '') return;

    // Gestion spécifique du clear pour vider l'état
    if (trimmedCmd === 'clear') {
      commands.clear();
      return;
    }

    // Recherche de la commande
    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (output) {
        setHistory(prev => [...prev, { type: 'output', content: output }]);
      }
    } else {
      // Gestion des erreurs
      setHistory(prev => [
        ...prev,
        { type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for available commands.` }
      ]);
    }

    // Gestion de l'historique (flèches haut/bas)
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl h-[600px] bg-black/95 border-2 border-green-500/50 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.3)] overflow-hidden backdrop-blur-xl"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/80 border-b border-green-500/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
          </div>
          <div className="text-green-400 font-mono text-sm font-bold">
            matteo@portfolio:~$
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          className="p-4 h-[calc(100%-120px)] overflow-y-auto font-mono text-sm custom-scrollbar"
        >
          <AnimatePresence>
            {history.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className={`mb-1 ${
                  line.type === 'input'
                    ? 'text-cyan-400'
                    : line.type === 'error'
                    ? 'text-red-400'
                    : 'text-green-400'
                }`}
              >
                <pre className="whitespace-pre-wrap">{line.content}</pre>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleSubmit} className="px-4 py-3 bg-black/80 border-t border-green-500/30">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-mono text-sm">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none placeholder-green-400/30"
              placeholder="Type 'help' for commands..."
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </form>
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.7);
        }
      `}</style>
    </motion.div>
  );
}