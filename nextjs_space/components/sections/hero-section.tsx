'use client';

// Sección Hero principal con fondo de imagen y llamadas a la acción
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sprout } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.abacus.ai/images/640b5fb6-4abf-46b2-9197-56a0686bfae9.png)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80" />
      
      {/* Elemento decorativo de semilla */}
      <div className="absolute top-1/4 right-10 opacity-10">
        <Sprout className="w-64 h-64 text-white" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sprout className="w-5 h-5 text-teal-400" />
            <span className="text-white/90 text-sm font-medium">
              Muyu = Semilla en Kichwa
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {t?.hero?.title ?? 'Sembrando Futuro,'}
            <br />
            <span className="text-gradient-muyu bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              {t?.hero?.titleHighlight ?? 'Cosechando Desarrollo'}
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t?.hero?.subtitle ?? 'Combinamos el rigor técnico de la consultoría profesional con el compromiso genuino por el desarrollo social en Ecuador.'}
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/proyectos"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-500 hover:to-green-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/25 transition-all duration-300"
            >
              {t?.hero?.ctaProjects ?? 'Ver Proyectos'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/servicios"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
            >
              {t?.hero?.ctaServices ?? 'Nuestros Servicios'}
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
