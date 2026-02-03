'use client';

// Componente de pie de página
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { Sprout, Mail, MapPin, Heart } from 'lucide-react';

export function Footer() {
  const { t, locale } = useLanguage();

  const quickLinks = [
    { href: '/proyectos', label: t?.nav?.projects ?? 'Proyectos' },
    { href: '/servicios', label: t?.nav?.services ?? 'Servicios' },
    { href: '/donar', label: t?.nav?.donate ?? 'Donar' },
    { href: '/contacto', label: t?.nav?.contact ?? 'Contacto' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-teal-600">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">
                Fundación <span className="text-teal-400">Muyu</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              {t?.footer?.tagline ?? 'Sembrando semillas de cambio en Ecuador'}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">
              {t?.footer?.quickLinks ?? 'Enlaces Rápidos'}
            </h4>
            <ul className="space-y-2">
              {quickLinks?.map?.((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href ?? '/'}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              )) ?? null}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">
              {t?.nav?.contact ?? 'Contacto'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>Quito, Ecuador</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-teal-500" />
                <span>info@fundacionmuyu.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Fundación Muyu. {t?.footer?.rights ?? 'Todos los derechos reservados'}.
            <Heart className="w-4 h-4 text-red-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
