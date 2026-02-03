'use client';

// Contenido de la página Sobre Nosotros
import { useLanguage } from '@/lib/language-context';
import { team } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sprout, Target, Eye, History, Users } from 'lucide-react';

export function AboutPageContent() {
  const { t, locale } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Sprout className="absolute top-20 right-20 w-64 h-64 text-white" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t?.about?.title ?? 'Sobre Nosotros'}
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              {t?.about?.subtitle ?? 'Conoce la historia y el equipo detrás de Fundación Muyu'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <History className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {t?.about?.historyTitle ?? 'Nuestra Historia'}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t?.about?.historyText ?? ''}
              </p>
              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-500">
                <p className="text-teal-800 italic">
                  {locale === 'es'
                    ? '"Muyu" significa "semilla" en kichwa, el idioma de los pueblos originarios de la Sierra ecuatoriana. Este nombre refleja nuestra filosofía: cada acción es una semilla que, con dedicación y tiempo, puede transformarse en un árbol de oportunidades.'
                    : '"Muyu" means "seed" in Kichwa, the language of the indigenous peoples of the Ecuadorian highlands. This name reflects our philosophy: every action is a seed that, with dedication and time, can grow into a tree of opportunities.'}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://cdn.abacus.ai/images/5e9133f9-38ed-4c50-bb4d-8c3eda28cd8d.png"
                  alt="Equipo Fundación Muyu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t?.about?.missionTitle ?? 'Nuestra Misión'}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t?.about?.missionText ?? ''}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t?.about?.visionTitle ?? 'Nuestra Visión'}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t?.about?.visionText ?? ''}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t?.about?.teamTitle ?? 'Nuestro Equipo'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === 'es'
                ? 'Profesionales apasionados comprometidos con el desarrollo social de Ecuador'
                : 'Passionate professionals committed to Ecuador\'s social development'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team?.map?.((member, index) => (
              <motion.div
                key={member?.id ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member?.image ?? ''}
                    alt={member?.name ?? 'Miembro del equipo'}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member?.name ?? ''}</h3>
                <p className="text-teal-600 text-sm font-medium mb-3">
                  {locale === 'es' ? member?.role?.es : member?.role?.en}
                </p>
                <p className="text-gray-600 text-sm">
                  {locale === 'es' ? member?.bio?.es : member?.bio?.en}
                </p>
              </motion.div>
            )) ?? null}
          </div>
        </div>
      </section>
    </div>
  );
}
