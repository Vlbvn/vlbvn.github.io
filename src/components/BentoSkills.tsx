"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {Code2,Smartphone,Terminal,Cpu,Check,Copy,Palette,} from "lucide-react";

export default function BentoSkills() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("brice_zongo@yahoo.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-8 text-slate-900 dark:text-white text-center sm:text-left">
        Mon Écosystème{" "}
        <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          Technique
        </span>
      </h2>

      {/* GRILLE BENTO PARFAITE : Réactive de 1 à 3 colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">

        {/* 1. Expertise principale (Prend 2 colonnes sur PC, 2 lignes de haut) */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-2 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-sm shadow-sm transition-colors duration-300"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-teal-500 font-bold">
                Spécialisation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Applications Web & Mobiles Modernes
              </h3>
            </div>
            <div className="p-3 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-2xl flex-shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed max-w-xl">
            Je développe des solutions digitales complètes, allant des interfaces
            modernes aux architectures applicatives évolutives. Mon expertise
            couvre le développement frontend avec{" "}
            <strong className="text-slate-900 dark:text-white font-medium">
              React, Next.js et TypeScript
            </strong>
            {" "}
            , ainsi que la création d&apos;applications mobiles performantes avec{" "}
            <strong className="text-slate-900 dark:text-white font-medium">
              React Native & Expo
            </strong>
            {" "}
            . Je mets l&apos;accent sur l&apos;expérience utilisateur, la qualité du code
            et la scalabilité des solutions.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "React Native",
              "Expo",
              "Tailwind CSS",
              "Material UI",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono rounded-lg text-slate-600 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 2. Expérience (1 colonne, 1 ligne de haut) */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 flex items-center justify-between backdrop-blur-sm shadow-sm transition-colors duration-300"
        >
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Expérience pratique
            </span>
            <div className="text-3xl font-black text-slate-900 dark:text-white">
              10+
            </div>
            <p className="text-[11px] text-slate-500">
              Projets web, mobiles et solutions digitales.
            </p>
          </div>
          <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-2xl flex-shrink-0">
            <Code2 className="w-5 h-5" />
          </div>
        </motion.div>

        {/* 3. Contact interactif (1 colonne, 1 ligne de haut) */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={handleCopyEmail}
          className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 dark:border-slate-800/40 rounded-3xl p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden shadow-md"
        >
          <div className="flex items-center justify-between text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Disponible pour projets
            </span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            )}
          </div>

          <div>
            <div className="text-sm font-medium text-slate-400">
              📧 Contact professionnel
            </div>
            <div className="text-base font-bold text-white tracking-tight truncate">
              brice_zongo@yahoo.com
            </div>
          </div>

          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-emerald-500/90 flex items-center justify-center text-white font-bold text-sm"
            >
              Adresse copiée !
            </motion.div>
          )}
        </motion.div>

        {/* 4. Backend (1 colonne, 2 lignes de haut) */}
 <motion.div 
  whileTap={{ scale: 0.98 }}
  className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-sm shadow-sm md:row-span-2 transition-colors duration-300"
>
  <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
    <Terminal className="w-5 h-5" />
  </div>

  <div className="space-y-2">
    <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
      Backend, API & Cloud
    </h4>
    <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
      Création d&apos;architectures backend, gestion des bases de données relationnelles ou NoSQL,
      authentification, intégration d&apos;API et déploiement cloud.
    </p>
  </div>

  {/* Liste des badges mise à jour avec Supabase et PostgreSQL */}
  <div className="flex flex-wrap gap-1.5 pt-2">
    {[
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "Node.js",
      "Express",
      "MySQL",
      "Vercel",
    ].map((item) => (
      <span
        key={item}
        className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 text-[10px] font-mono rounded text-slate-500"
      >
        {item}
      </span>
    ))}
  </div>
</motion.div>

        {/* 5. Intégrations matérielles & NFC (2 colonnes sur PC, 1 ligne de haut) */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="md:col-span-2 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 flex items-center gap-6 backdrop-blur-sm shadow-sm transition-colors duration-300"
        >
          <div className="p-4 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-2xl hidden sm:block flex-shrink-0">
            <Cpu className="w-6 h-6" />
          </div>

          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <span className="p-1 bg-cyan-500/10 text-cyan-600 rounded-md sm:hidden">
                <Cpu className="w-3.5 h-3.5" />
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                Intégrations & Solutions Connectées
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Développement de solutions intégrant APIs, paiements,
              géolocalisation, authentification sécurisée et technologies NFC
              pour créer des expériences digitales innovantes.
            </p>
          </div>
        </motion.div>

        {/* 6. UI UX & UI Libraries (1 colonne, 1 ligne de haut) */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-sm shadow-sm transition-colors duration-300"
        >
          <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl w-fit">
            <Palette className="w-5 h-5" />
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white tracking-tight">
              UI/UX & Architecture
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-1.5">
              Interfaces modernes, design responsive, prototypes Figma et
              expériences utilisateurs intuitives.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}