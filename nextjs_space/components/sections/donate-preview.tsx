'use client';

// Sección de llamada a donar en la página principal
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Sprout } from 'lucide-react';

export function DonatePreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-green-700 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <Sprout className="absolute top-10 left-10 w-32 h-32 text-white" />
        <Sprout className="absolute bottom-10 right-10 w-48 h-48 text-white transform rotate-45" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t?.donate?.title ?? 'Apoya Nuestra Misión'}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            {t?.donate?.subtitle ?? 'Tu donación impulsa proyectos que transforman vidas en comunidades vulnerables de Ecuador'}
          </p>
          <Link
            href="/donar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 hover:bg-gray-100 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart className="w-5 h-5" />
            {t?.donate?.submitButton ?? 'Realizar Donación'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
