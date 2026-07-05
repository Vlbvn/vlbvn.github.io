"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
    { href: '/contact', label: 'Contact & À Propos' },
  ];

  return (
    // Fond adaptatif : blanc translucide le jour, ardoise/noir la nuit avec flou de verre
    <nav className="w-full bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-900 sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Nom */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Vlbvn<span className="text-teal-500 dark:text-teal-400">.dev</span>
            </Link>
          </div>

          {/* Liens de navigation (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 relative">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    // Texte : plus contrasté le jour pour rester lisible sur fond clair
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-xl ${
                      isActive 
                        ? 'text-teal-600 dark:text-teal-400' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {/* Pilule de fond active adaptative (Ardoise claire / Ardoise sombre) */}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveBg"
                        className="absolute inset-0 bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/40 rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bouton d'action rapide (Desktop) */}
          <div className="hidden md:block">
            <a href="/cv.pdf" download>
              <Button variant="outline" size="sm" className="font-semibold text-xs border-slate-200 dark:border-teal-500/20 text-slate-800 dark:text-teal-400 hover:bg-slate-100 dark:hover:bg-teal-500/10">
                Mon CV
              </Button>
            </a>
          </div>

          {/* Menu Mobile (Hamburger) */}
          <div className="md:hidden">
            <Button variant="outline" size="sm" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 border-slate-200 dark:border-slate-900">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
}