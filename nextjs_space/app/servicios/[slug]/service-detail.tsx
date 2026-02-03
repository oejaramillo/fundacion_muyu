'use client';

// Contenido de detalle de servicio
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, BarChart3, TrendingUp, Building2, Target, PiggyBank } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  TrendingUp,
  Building2,
  Target,
  PiggyBank,
};

interface ServiceDetailProps {
  service: {
    id?: number;
    slug?: string;
    title?: { es?: string; en?: string };
    shortDescription?: { es?: string; en?: string };
    fullDescription?: { es?: string; en?: string };
    image?: string;
    icon?: string;
    features?: { es?: string[]; en?: string[] };
  };
}

export function ServiceDetailContent({ service }: ServiceDetailProps) {
  const { locale, t } = useLanguage();

  const title = locale === 'es' ? service?.title?.es : service?.title?.en;
  const fullDescription = locale === 'es' ? service?.fullDescription?.es : service?.fullDescription?.en;
  const features = (locale === 'es' ? service?.features?.es : service?.features?.en) ?? [];
  const IconComponent = iconMap[service?.icon ?? ''] ?? BarChart3;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {/* Back button */}
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          {locale === 'es' ? 'Volver a Servicios' : 'Back to Services'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contenido */}
            <div>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center mb-6">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {title ?? ''}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {fullDescription ?? ''}
              </p>

              {/* Características */}
              <h3 className="font-semibold text-gray-900 mb-4">
                {locale === 'es' ? 'Lo que incluye:' : 'What\'s included:'}
              </h3>
              <ul className="space-y-3 mb-8">
                {features?.map?.((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature ?? ''}</span>
                  </li>
                )) ?? null}
              </ul>

              {/* CTA */}
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t?.services?.requestQuote ?? 'Solicitar Cotización'}
              </Link>
            </div>

            {/* Imagen */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service?.image ?? ''}
                alt={title ?? 'Servicio'}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
