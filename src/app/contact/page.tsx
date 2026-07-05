"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, FileText, Send, CheckCircle, MessageSquare } from 'lucide-react';
import Button from '../../components/Button';
import ContactFaq from '../../features/contact/ContactFaq';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    // Fond global adaptatif : slate-50 le jour, slate-950 la nuit
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Grille principale (Formulaire + Infos) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 1. SECTION À PROPOS & COORDONNÉES (5 colonnes) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-slate-900 dark:text-white">
                À propos & <br />
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Contact
                </span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                Moi, c&apos;est Brice Alban Zongo. Concepteur d&apos;architectures logicielles fluides, je me spécialise dans le développement d&apos;écosystèmes web et mobiles modernes. 
                <br /><br />
                Mon créneau ? Concevoir des applications robustes et typées, du schéma de base de données jusqu&apos;à l&apos;intégration de fonctionnalités matérielles comme le NFC ou des passerelles de paiement. Discutons de vos besoins techniques.
              </p>
            </div>

            {/* Liens de réseaux et CV */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-900">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">Canaux Directs</h3>
              
              <div className="space-y-3">
                {/* Email */}
                <a 
                  href="mailto:brice_zongo@yahoo.com"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group text-sm font-medium"
                >
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group-hover:border-teal-500/30 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <Mail className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6 text-slate-500 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400" />
                  </div>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Envoyer un Email</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/zongo-brice-9a09562a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group text-sm font-medium"
                >
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group-hover:border-teal-500/30 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <svg className="w-4 h-4 fill-current text-slate-500 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Profil LinkedIn</span>
                </a>

                {/* CV PDF */}
                <a 
                  href="/assets/cv-brice-zongo.pdf"
                  download="cv-brice-zongo.pdf"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group text-sm font-medium"
                >
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group-hover:border-teal-500/30 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <FileText className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Télécharger mon CV (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. FORMULAIRE DE CONTACT DYNAMIQUE (7 colonnes) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 w-full"
          >
            {/* Box adaptative : fond blanc le jour, ardoise foncé opaque la nuit */}
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 p-6 sm:p-8 rounded-2xl backdrop-blur-md relative overflow-hidden shadow-md dark:shadow-xl transition-colors duration-300">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      <MessageSquare className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                      <span>Laissez un message de projet</span>
                    </div>

                    {/* Champ Nom complet */}
                    <div className="space-y-1.5 group/input">
                      <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider group-focus-within/input:text-teal-500 dark:group-focus-within/input:text-teal-400 transition-colors duration-300">
                        Nom complet
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 focus:border-teal-500/50 dark:focus:border-teal-500/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none transition-all duration-300 shadow-inner z-10 relative"
                          placeholder="Nom_Prenom"
                        />
                        <div className="absolute inset-0 rounded-xl bg-teal-500/5 opacity-0 group-focus-within/input:opacity-100 pointer-events-none transition-opacity duration-300 blur-sm z-0" />
                      </div>
                    </div>

                    {/* Champ Email */}
                    <div className="space-y-1.5 group/input">
                      <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider group-focus-within/input:text-teal-500 dark:group-focus-within/input:text-teal-400 transition-colors duration-300">
                        Adresse Email
                      </label>
                      <div className="relative">
                        <input 
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 focus:border-teal-500/50 dark:focus:border-teal-500/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none transition-all duration-300 shadow-inner z-10 relative"
                          placeholder="mail@exemple.com"
                        />
                        <div className="absolute inset-0 rounded-xl bg-teal-500/5 opacity-0 group-focus-within/input:opacity-100 pointer-events-none transition-opacity duration-300 blur-sm z-0" />
                      </div>
                    </div>

                    {/* Champ Message */}
                    <div className="space-y-1.5 group/input">
                      <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider group-focus-within/input:text-teal-500 dark:group-focus-within/input:text-teal-400 transition-colors duration-300">
                        Votre Message
                      </label>
                      <div className="relative">
                        <textarea 
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 focus:border-teal-500/50 dark:focus:border-teal-500/50 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none transition-all duration-300 resize-none shadow-inner z-10 relative"
                          placeholder="Parlez-moi de votre application web ou mobile..."
                        />
                        <div className="absolute inset-0 rounded-xl bg-teal-500/5 opacity-0 group-focus-within/input:opacity-100 pointer-events-none transition-opacity duration-300 blur-sm z-0" />
                      </div>
                    </div>

                    <Button type="submit" variant="primary" className="w-full gap-2 mt-2">
                      <span>Envoyer la demande</span>
                      <Send className="w-3.5 h-3.5" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4 flex flex-col items-center justify-center"
                  >
                    <div className="p-4 bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20 rounded-full animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message envoyé avec succès !</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed font-light">
                      Merci pour votre intérêt. Je prendrai le temps d&apos;analyser vos besoins techniques et je vous répondrai sous 24 à 48 heures.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-mono text-teal-600 dark:text-teal-400 underline hover:text-teal-500 dark:hover:text-teal-300 pt-4 cursor-pointer select-none"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

        {/* Ligne séparatrice adaptative */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-900 to-transparent my-12 transition-colors duration-300" />

        {/* Insertion de la section biographie / histoire personnelle */}
        <ContactFaq />

      </div>
    </main>
  );
}