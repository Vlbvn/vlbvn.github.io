export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'Mobile' | 'Système';
  github?: string; // Optionnel car tes repos sont privés
  demo?: string;   // Lien vers le site ou le Play Store / App Store si disponible
  image: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "segme",
    title: "SegMe",
    description: "Application mobile de planification et de prise de rendez-vous de services focus Coiffure. Gestion complète du cycle de build avec Expo et EAS, configuration d'icônes adaptatives, splash screens et déploiement réussi sur le Google Play Store.",
    tags: ["React Native", "TypeScript", "Expo", "EAS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/Vlbvn",
    demo: "https://play.google.com", // Tu pourras mettre le vrai lien Play Store
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "switchbf",
    title: "Switch Burkina",
    description: "Plateforme innovante de cartes de visite virtuelles et de services d'identification basés sur la technologie NFC. Permet le partage instantané de profils professionnels et la gestion dynamique des données de contact.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NFC API", "Firebase"],
    category: "Web",
    demo: "https://switch-bf.vercel.app/",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bevaxe",
    title: "BevAxe",
    description: "Plateforme web moderne conçue pour simplifier la gestion des commandes, des stocks et des livraisons entre fournisseurs de boissons et acheteurs en gros.",
    tags: ["React.js", "JavaScript", "CSS Module", "Firebase"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sunkiss",
    title: "Sunkiss",
    description: "Application Progressive Web App (PWA) mobile-first développée pour simplifier la gestion des stocks, des produits et des mouvements d'inventaire des commerces grâce à une interface moderne, rapide et intuitive.",
    tags: ["React.js", "Vite.js", "Tailwind CSS", "TypeScript"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sysdef",
    title: "SysDef",
    description: "Plateforme web moderne développée pour promouvoir et gérer un événement international dédié à la sûreté, à la défense et à la sécurité, intégrant la gestion des inscriptions, du contenu multilingue et des informations destinées aux visiteurs et exposants.",
    tags: ["React.js", "JavaScript", "Architecture"],
    category: "Système",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sipe",
    title: "SIPE",
    description: "Plateforme web professionnelle développée pour valoriser les activités et les services de SIPE Burkina, offrant une présentation moderne de l'entreprise, de ses réalisations et de ses solutions.",
    tags: ["Html", "JavaScript", "CSS", "Architecture"],
    category: "Web",
    demo: "https://sipe-bf.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
  id: "ecodis",
  title: "ECODIS SA",
  description: "Site web professionnel développé pour présenter ECODIS SA, acteur majeur dans la distribution de produits pétroliers, lubrifiants et équipements de mesure au Burkina Faso, avec une vitrine moderne mettant en avant ses services, son expertise et ses solutions.",
  tags: ["React", "JavaScript", "CSS", "Responsive Design"],
  category: "Web",
  demo: "https://ecodissa.com/",
image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop"
}
];