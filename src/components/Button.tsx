import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500/50 cursor-pointer select-none';

  const variants = {
    // Le bouton principal conserve son effet néon turquoise qui ressort très bien sur fond clair et sombre
    primary: 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 hover:bg-teal-400 hover:shadow-teal-400/30',
    
    // Le bouton secondaire passe d'un gris clair le jour à un ardoise profond la nuit
    secondary: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-600 shadow-sm dark:shadow-none',
    
    // Le bouton contour s'assombrit le jour (text-teal-600) pour un contraste de texte optimal sur fond blanc
    outline: 'bg-transparent text-teal-600 dark:text-teal-400 border border-teal-500/30 hover:bg-teal-500/5 dark:hover:bg-teal-500/10 hover:border-teal-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}