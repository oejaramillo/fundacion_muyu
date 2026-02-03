'use client';

// Componente selector de idioma
import { useLanguage } from '@/lib/language-context';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef?.current && !dropdownRef.current.contains(event?.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'es' as const, label: 'Español', flag: '🇪🇨' },
    { code: 'en' as const, label: 'English', flag: '🇺🇸' },
  ];

  const currentLang = languages?.find((l) => l?.code === locale) ?? languages?.[0];

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
        aria-label="Seleccionar idioma"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-1 w-36 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
          {languages?.map?.((lang) => (
            <button
              key={lang?.code}
              onClick={() => {
                setLocale(lang?.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-teal-50 transition-colors ${
                locale === lang?.code ? 'text-teal-600 bg-teal-50 font-medium' : 'text-gray-700'
              }`}
            >
              <span>{lang?.flag}</span>
              <span>{lang?.label}</span>
            </button>
          )) ?? null}
        </div>
      )}
    </div>
  );
}
