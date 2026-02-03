'use client';

// Sección de vista previa de Sobre Nosotros en la página principal
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Eye } from 'lucide-react';

export function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://cdn.abacus.ai/images/5e9133f9-38ed-4c50-bb4d-8c3eda28cd8d.png"
                alt="Equipo de Fundación Muyu colaborando"
                fill
                className="object-cover"
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl -z-10" />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t?.about?.title ?? 'Sobre Nosotros'}
            </h2>
            
            {/* Misión */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {t?.about?.missionTitle ?? 'Nuestra Misión'}
                </h3>
              </div>
              <p className="text-gray-600 pl-13">
                {t?.about?.missionText ?? 'Impulsar el desarrollo sostenible en Ecuador a través de proyectos de impacto social y servicios de consultoría técnica especializada.'}
              </p>
            </div>

            {/* Visión */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {t?.about?.visionTitle ?? 'Nuestra Visión'}
                </h3>
              </div>
              <p className="text-gray-600 pl-13">
                {t?.about?.visionText ?? 'Ser referentes en el desarrollo social y la investigación aplicada en América Latina.'}
              </p>
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {t?.projects?.learnMore ?? 'Conocer Más'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
