"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, GitBranch, Gauge, Smartphone, Server, Cloud } from 'lucide-react';

const ECOSYSTEM_DATA = [
  {
    title: "Interface & Mobile",
    icon: <Smartphone className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    tools: ["React.js", "Next.js", "React Native", "Expo", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Backend & Données",
    icon: <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    tools: ["Node.js", "Firebase", "Supabase", "APIs REST", "PostgreSQL", "Firestore"]
  },
  {
    title: "Infrastructure & CI/CD",
    icon: <Cloud className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    tools: ["EAS (Expo Build)", "Vercel", "GitHub Actions", "Git", "Outils Privés"]
  }
];

const RIGOR_DATA = [
  {
    title: "Type-Safe à 100%",
    icon: <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    desc: "Utilisation stricte et intransigeante de TypeScript pour éliminer les erreurs à la compilation et garantir une robustesse totale en production."
  },
  {
    title: "CI/CD & Automatisation",
    icon: <GitBranch className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
    desc: "Pipelines de déploiement continu automatisés via EAS et Vercel pour des cycles de livraison courts, sécurisés et sans coupure de service."
  },
  {
    title: "Core Web Vitals Élite",
    icon: <Gauge className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    desc: "Optimisation minutieuse du rendu (SSR/SSG), de l'indexation SEO et de la fluidité mobile pour offrir des performances maximales."
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function ProjectExtensions() {
  return (
    <div className="space-y-24 pt-16">
      
      {/* 1. SECTION ECOSYSTÈME GLOBAL */}
      <section className="space-y-12">
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Écosystème de <span className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">Déploiement</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-light">
            L&apos;ensemble des technologies croisées et des infrastructures cloud exploitées pour concevoir, builder et héberger ces architectures logicielles.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {ECOSYSTEM_DATA.map((box, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 p-6 rounded-2xl backdrop-blur-sm space-y-4 group hover:border-slate-300 dark:hover:border-slate-800/80 shadow-sm dark:shadow-md transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                  {box.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{box.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {box.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 text-xs font-mono rounded-lg cursor-default hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/20 dark:hover:border-teal-500/20 transition-colors duration-300 shadow-inner"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. SECTION RIGUEUR TECHNIQUE */}
      <section className="space-y-12">
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Standards de <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">Production</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-light">
            Au-delà des fonctionnalités, chaque ligne de code est soumise à des exigences strictes de maintenabilité, d&apos;automatisation et de performance commerciale.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {RIGOR_DATA.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900/60 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center space-y-4 group hover:border-slate-300 dark:hover:border-teal-500/20 shadow-sm dark:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-2xl shadow-sm dark:shadow-inner group-hover:scale-105 transition-transform duration-300">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}