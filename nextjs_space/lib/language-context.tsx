'use client';

// Contexto para manejo del idioma en toda la aplicación
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale, defaultLocale, getTranslations } from './i18n';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof getTranslations extends (locale: Locale) => infer R ? R : never;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Inicializar con valor por defecto para evitar problemas de hidratación
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  // Solo leer localStorage después de montar en cliente
  useEffect(() => {
    setMounted(true);
    try {
      const savedLocale = localStorage.getItem('muyu-locale') as Locale | null;
      if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
        setLocaleState(savedLocale);
      }
    } catch (e) {
      // Ignorar errores de localStorage
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('muyu-locale', newLocale);
    } catch (e) {
      // Ignorar errores de localStorage
    }
  }, []);

  const t = getTranslations(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  }
  return context;
}
