'use client';

// Componente de tarjeta de servicio
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { ArrowRight, BarChart3, TrendingUp, Building2, Target, PiggyBank } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  TrendingUp,
  Building2,
  Target,
  PiggyBank,
};

interface ServiceCardProps {
  service: {
    id?: number;
    slug?: string;
    title?: { es?: string; en?: string };
    shortDescription?: { es?: string; en?: string };
    icon?: string;
  };
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const { locale, t } = useLanguage();

  const title = locale === 'es' ? service?.title?.es : service?.title?.en;
  const description = locale === 'es' ? service?.shortDescription?.es : service?.shortDescription?.en;
  const IconComponent = iconMap[service?.icon ?? ''] ?? BarChart3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index ?? 0) * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/servicios/${service?.slug ?? ''}`}>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 group-hover:border-teal-200">
          {/* Icono */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <IconComponent className="w-7 h-7 text-white" />
          </div>

          {/* Contenido */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
            {title ?? 'Servicio'}
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-1">
            {description ?? ''}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-teal-600 font-medium text-sm group-hover:gap-3 transition-all">
            {t?.services?.requestQuote ?? 'Solicitar Cotización'}
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
