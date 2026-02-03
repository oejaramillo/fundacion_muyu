'use client';

// Componente de navegación principal
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determinar si estamos en la página principal (con hero oscuro)
  const isHomePage = pathname === '/';

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50);
    };
    window?.addEventListener?.('scroll', handleScroll);
    return () => window?.removeEventListener?.('scroll', handleScroll);
  }, []);

  // En páginas internas, siempre usar estilo scrolled (fondo claro)
  const useScrolledStyle = isScrolled || !isHomePage;

  const navLinks = [
    { href: '/', label: t?.nav?.home ?? 'Inicio' },
    { href: '/proyectos', label: t?.nav?.projects ?? 'Proyectos' },
    { href: '/servicios', label: t?.nav?.services ?? 'Servicios' },
    { href: '/donar', label: t?.nav?.donate ?? 'Donar' },
    { href: '/nosotros', label: t?.nav?.about ?? 'Nosotros' },
    { href: '/contacto', label: t?.nav?.contact ?? 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useScrolledStyle
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${
              useScrolledStyle ? 'bg-teal-100' : 'bg-white/20'
            }`}>
              <Sprout className={`w-6 h-6 ${
                useScrolledStyle ? 'text-teal-600' : 'text-white'
              } group-hover:scale-110 transition-transform`} />
            </div>
            <span className={`font-bold text-xl ${
              useScrolledStyle ? 'text-gray-900' : 'text-white'
            }`}>
              Fundación <span className="text-teal-500">Muyu</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? '/'}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  useScrolledStyle
                    ? 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link?.label}
              </Link>
            )) ?? null}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <div className={useScrolledStyle ? 'text-gray-700' : 'text-white'}>
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                useScrolledStyle
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks?.map?.((link) => (
                <Link
                  key={link?.href}
                  href={link?.href ?? '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium transition-colors"
                >
                  {link?.label}
                </Link>
              )) ?? null}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
