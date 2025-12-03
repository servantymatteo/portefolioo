export function getBorderColor(gradient: string): string {
  if (gradient.includes('blue') || gradient.includes('cyan'))
    return 'border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]';
  if (gradient.includes('purple') || gradient.includes('pink'))
    return 'border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]';
  if (gradient.includes('orange') || gradient.includes('red'))
    return 'border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]';
  if (gradient.includes('green') || gradient.includes('emerald'))
    return 'border-green-500/50 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]';
  if (gradient.includes('indigo'))
    return 'border-indigo-500/50 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]';
  return 'border-green-500/50 hover:border-green-400';
}

export function getIconColor(gradient: string): string {
  if (gradient.includes('blue') || gradient.includes('cyan'))
    return 'bg-cyan-500/20 border-cyan-500/50 group-hover:bg-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]';
  if (gradient.includes('purple') || gradient.includes('pink'))
    return 'bg-purple-500/20 border-purple-500/50 group-hover:bg-purple-500/30 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]';
  if (gradient.includes('orange') || gradient.includes('red'))
    return 'bg-orange-500/20 border-orange-500/50 group-hover:bg-orange-500/30 group-hover:border-orange-400 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]';
  if (gradient.includes('green') || gradient.includes('emerald'))
    return 'bg-green-500/20 border-green-500/50 group-hover:bg-green-500/30 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]';
  if (gradient.includes('indigo'))
    return 'bg-indigo-500/20 border-indigo-500/50 group-hover:bg-indigo-500/30 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]';
  return 'bg-green-500/20 border-green-500/50';
}

export function getTitleColor(gradient: string): string {
  if (gradient.includes('blue') || gradient.includes('cyan')) return 'text-cyan-400';
  if (gradient.includes('purple') || gradient.includes('pink')) return 'text-purple-400';
  if (gradient.includes('orange') || gradient.includes('red')) return 'text-orange-400';
  if (gradient.includes('green') || gradient.includes('emerald')) return 'text-green-400';
  if (gradient.includes('indigo')) return 'text-indigo-400';
  return 'text-green-400';
}
