'use client';

// Componente de tarjeta de proyecto
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Users, Calendar, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id?: number;
    slug?: string;
    title?: { es?: string; en?: string };
    description?: { es?: string; en?: string };
    image?: string;
    category?: { es?: string; en?: string };
    beneficiaries?: number;
    year?: number;
    status?: { es?: string; en?: string };
  };
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { locale, t } = useLanguage();

  const title = locale === 'es' ? project?.title?.es : project?.title?.en;
  const description = locale === 'es' ? project?.description?.es : project?.description?.en;
  const category = locale === 'es' ? project?.category?.es : project?.category?.en;
  const status = locale === 'es' ? project?.status?.es : project?.status?.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index ?? 0) * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/proyectos/${project?.slug ?? ''}`}>
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Imagen */}
          <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
            <Image
              src={project?.image ?? '/images/placeholder.jpg'}
              alt={title ?? 'Proyecto'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Badge de categoría */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
                {category ?? 'Proyecto'}
              </span>
            </div>
            {/* Badge de estado */}
            <div className="absolute top-3 right-3">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                status === 'En curso' || status === 'Ongoing'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {status ?? ''}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
              {title ?? 'Sin título'}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
              {description ?? ''}
            </p>

            {/* Estadísticas */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {(project?.beneficiaries ?? 0).toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project?.year ?? ''}
              </span>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-teal-600 font-medium text-sm group-hover:gap-3 transition-all">
              {t?.projects?.learnMore ?? 'Conocer Más'}
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
