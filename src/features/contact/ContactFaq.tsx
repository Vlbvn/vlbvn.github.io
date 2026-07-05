"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Code2, Cpu, GraduationCap } from 'lucide-react';

const BIO_ITEMS = [
  {
    icon: <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    title: "Parcours & Rigueur",
    description: "Diplômé d'un Bachelor en Systèmes d'Information, j'ai forgé mes compétences autour d'une obsession : la robustesse du code. Pour moi, une application doit être aussi stable que performante."
  },
  {
    icon: <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    title: "Le Web connecté au Réel",
    description: "Ce qui me passionne, c'est de briser la frontière du virtuel. Que ce soit en développant des plateformes d'identification par cartes NFC (comme Switch Burkina) ou des applications mobiles de services (comme SegMe), j'aime créer des outils qui ont un impact physique immédiat."
  },
  {
    icon: <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: "Ma Vision d'Ingénieur",
    description: "Je ne me contente pas d'aligner des lignes de code. J'interviens sur toute la chaîne : de la modélisation rigoureuse des bases de données jusqu'à l'automatisation complète des déploiements. Le typage strict avec TypeScript est ma norme, pas une option."
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function ContactFaq() {
  return (
    <section className="w-full pt-16 max-w-5xl mx-auto space-y-10">
      
      {/* En-tête de section plus humain et adaptatif */}
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-900 pb-4 transition-colors duration-300">
        <div className="p-2 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl text-teal-600 dark:text-teal-400 shadow-sm">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Au-delà du code : qui suis-je ?</h2>
          <p className="text-xs text-slate-500 dark:text-slate-500 font-light">Mon approche, mes convictions et ma vision du développement.</p>
        </div>
      </div>

      {/* Grille de présentation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {BIO_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            // Transition de fond : blanc le jour, ardoise sombre transparente la nuit
            className="bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 p-6 rounded-2xl backdrop-blur-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-800/80 transition-colors duration-300 flex flex-col justify-between shadow-sm dark:shadow-md"
          >
            <div className="space-y-3">
              {/* Conteneur de l'icône adaptatif */}
              <div className="p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl w-max shadow-inner">
                {item.icon}
              </div>
              {/* Titre (Slate-800 / White) */}
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.title}</h3>
              {/* Description (Slate-600 / Slate-400) */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}