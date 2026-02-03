'use client';

// Contenido de la página de servicios
import { useLanguage } from '@/lib/language-context';
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/ui/service-card';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

export function ServicesPageContent() {
  const { t, locale } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-xl mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t?.services?.title ?? 'Servicios de Consultoría'}
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {t?.services?.subtitle ?? 'Soluciones técnicas especializadas para organizaciones que buscan generar impacto medible'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista de servicios */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services?.map?.((service, index) => (
              <ServiceCard key={service?.id ?? index} service={service} index={index} />
            )) ?? null}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {locale === 'es' ? '¿Necesitas una solución personalizada?' : 'Need a custom solution?'}
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              {locale === 'es'
                ? 'Contáctanos para discutir tus necesidades específicas y cómo podemos ayudarte a alcanzar tus objetivos.'
                : 'Contact us to discuss your specific needs and how we can help you achieve your goals.'}
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {t?.contact?.submitButton ?? 'Enviar Mensaje'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
