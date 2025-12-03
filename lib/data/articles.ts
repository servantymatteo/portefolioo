export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  gradient: string;
  content: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Claude Opus 4 et Sonnet 4 : l&apos;IA redéfinit le code',
    excerpt: 'Anthropic dévoile ses modèles hybrides avec raisonnement étendu, établissant de nouveaux standards en développement logiciel.',
    category: 'Intelligence Artificielle',
    date: '2 Décembre 2025',
    gradient: 'from-blue-500 to-cyan-500',
    content: 'Anthropic a introduit Claude Opus 4 et Claude Sonnet 4, marquant une révolution dans l&apos;IA de développement. Claude Opus 4 devient le meilleur modèle de codage au monde avec 72,5% sur SWE-bench et 43,2% sur Terminal-bench, tandis que Sonnet 4 atteint 72,7% sur SWE-bench. Ces modèles hybrides offrent deux modes : des réponses quasi-instantanées ou un raisonnement étendu visible étape par étape. Claude 3.7 Sonnet, premier modèle hybride sur le marché, excelle particulièrement en développement front-end. La compétition s&apos;intensifie avec Gemini 2.0 Flash (250 tokens/sec) et GPT-4.5, chacun optimisant ses forces : Claude pour le code et le raisonnement, GPT pour la polyvalence, Gemini pour la vitesse et le coût.',
    tags: ['Claude Opus 4', 'GPT-4.5', 'Gemini 2.0', 'SWE-bench'],
  },
  {
    id: 2,
    title: 'Vulnérabilités critiques fin 2025 : l&apos;urgence de patcher',
    excerpt: 'Plus de 35 000 CVE signalées en 2025, avec des exploitations actives de failles Windows, Citrix et 7-Zip.',
    category: 'Cybersécurité',
    date: '1 Décembre 2025',
    gradient: 'from-green-500 to-emerald-500',
    content: '2025 affiche un record alarmant avec plus de 35 000 vulnérabilités signalées, dont 38% classées haute ou critique. Les CVE-2025-59230 et CVE-2025-24990 de Microsoft Edge (score CVSS 7.8) sont activement exploitées. Citrix est touché par CVE-2025-7775 permettant l&apos;exécution de code à distance, tandis que 7-Zip nécessite une mise à jour urgente pour CVE-2025-11001 et CVE-2025-11002. La CISA a prolongé son contrat avec MITRE pour maintenir la base CVE opérationnelle. Les organisations doivent impérativement renforcer leurs SOC/MDR/XDR, accélérer le patching des vulnérabilités critiques et intensifier la formation des équipes IT face à ces menaces croissantes.',
    tags: ['CVE-2025', 'Microsoft Edge', 'Citrix', 'Zero-Day'],
  },
  {
    id: 3,
    title: 'Kubernetes 1.35 : mises à jour en place et Node Features',
    excerpt: 'La version 1.35 prévue le 17 décembre apporte les mises à jour de ressources Pod sans redémarrage et améliore la planification.',
    category: 'Infrastructure & Cloud',
    date: '26 Novembre 2025',
    gradient: 'from-purple-500 to-pink-500',
    content: 'Kubernetes 1.35, attendu pour le 17 décembre 2025, marque une étape majeure avec les mises à jour en place des ressources Pod passant en GA. Cette fonctionnalité permet d&apos;ajuster CPU et mémoire sans redémarrer Pods ou Containers, améliorant drastiquement la disponibilité. Node Declared Features (Alpha) résout les problèmes de planification dans les environnements hétérogènes en rendant les capacités des nœuds explicites. Les Image Volumes OCI passent en Beta, offrant de nouvelles possibilités de gestion. Avertissement important : containerd 1.X ne sera plus supporté, migration vers 2.0+ obligatoire. Cette version consolide Kubernetes comme plateforme d&apos;orchestration de référence pour les workloads cloud-native.',
    tags: ['Kubernetes 1.35', 'Pod Updates', 'Node Features', 'containerd'],
  },
];
