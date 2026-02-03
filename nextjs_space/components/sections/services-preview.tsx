'use client';

// Sección de vista previa de servicios en la página principal
import { useLanguage } from '@/lib/language-context';
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/ui/service-card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesPreview() {
  const { t } = useLanguage();

  // Mostrar solo los primeros 3 servicios
  const featuredServices = services?.slice?.(0, 3) ?? [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t?.services?.title ?? 'Servicios de Consultoría'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t?.services?.subtitle ?? 'Soluciones técnicas especializadas para organizaciones que buscan generar impacto medible'}
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredServices?.map?.((service, index) => (
            <ServiceCard key={service?.id ?? index} service={service} index={index} />
          )) ?? null}
        </div>

        {/* Botón ver todos */}
        <div className="text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
          >
            {t?.services?.viewAll ?? 'Ver Todos los Servicios'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
