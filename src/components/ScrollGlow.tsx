"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollGlowProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollGlow({ children, className = "" }: ScrollGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Écoute le défilement de cet élément spécifique par rapport au viewport (l'écran)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Déclenche dès qu'il entre et jusqu'à ce qu'il sorte
  });

  // Cartographie de l'opacité du halo lumineux :
  // 0 (hors écran) -> 0% opacité
  // 0.3 (entre dans l'écran) -> monte à 100% d'opacité
  // 0.5 (parfaitement au centre) -> reste à 100% d'opacité
  // 0.7 (commence à sortir) -> redescend à 0% d'opacité
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 0, 0]);
  
  // Légère variation de taille du halo pour donner un effet de pulsation organique au scroll
  const glowScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.95, 1, 0.95]);

  return (
    <div ref={containerRef} className={`relative group/glow ${className}`}>
      
      {/* LE HALO LUMINEUX EN ARRIÈRE-PLAN (Activé par le scroll sur mobile) */}
      <motion.div
        style={{ opacity: glowOpacity, scale: glowScale }}
        className="absolute -inset-px rounded-[25px] bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 dark:from-teal-400 dark:via-cyan-400 dark:to-emerald-400 blur-sm -z-10 pointer-events-none transition-shadow duration-500 block"
      />

      {/* LE CONTENU PRINCIPAL (Tes cartes de projets ou tes blocs bento) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}