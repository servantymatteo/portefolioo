export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  gradient: string;
  details: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Infrastructure Cloud',
    description: 'Architecture réseau haute disponibilité',
    category: 'Réseau',
    gradient: 'from-blue-500 to-cyan-500',
    details: 'Conception et déploiement d&apos;une infrastructure cloud complète avec redondance et haute disponibilité. Utilisation de technologies comme AWS, Terraform et Kubernetes pour orchestrer les ressources.',
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
  },
  {
    id: 2,
    title: 'Application Web',
    description: 'Interface moderne et responsive',
    category: 'Développement',
    gradient: 'from-purple-500 to-pink-500',
    details: 'Développement d&apos;une application web moderne avec React et Next.js. Interface utilisateur intuitive et responsive, optimisée pour tous les appareils.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Automatisation',
    description: 'Scripts et outils DevOps',
    category: 'DevOps',
    gradient: 'from-orange-500 to-red-500',
    details: 'Création de pipelines CI/CD automatisés et de scripts pour optimiser les processus de déploiement. Réduction du temps de mise en production de 70%.',
    technologies: ['GitHub Actions', 'Python', 'Bash', 'Ansible'],
  },
  {
    id: 4,
    title: 'Sécurité Réseau',
    description: 'Implémentation de pare-feu et VPN',
    category: 'Sécurité',
    gradient: 'from-green-500 to-emerald-500',
    details: 'Mise en place d&apos;une architecture de sécurité réseau complète avec pare-feu, VPN et systèmes de détection d&apos;intrusion pour protéger les infrastructures critiques.',
    technologies: ['pfSense', 'OpenVPN', 'Wireshark', 'Suricata'],
  },
  {
    id: 5,
    title: 'API REST',
    description: 'Backend scalable et performant',
    category: 'Backend',
    gradient: 'from-indigo-500 to-blue-500',
    details: 'Développement d&apos;une API REST robuste et scalable capable de gérer des milliers de requêtes par seconde. Architecture microservices avec mise en cache intelligente.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
];
