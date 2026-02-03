'use client';

// Contenido de detalle de proyecto
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, MapPin } from 'lucide-react';

interface ProjectDetailProps {
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
}

export function ProjectDetailContent({ project }: ProjectDetailProps) {
  const { locale } = useLanguage();

  const title = locale === 'es' ? project?.title?.es : project?.title?.en;
  const description = locale === 'es' ? project?.description?.es : project?.description?.en;
  const category = locale === 'es' ? project?.category?.es : project?.category?.en;
  const status = locale === 'es' ? project?.status?.es : project?.status?.en;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {/* Back button */}
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          {locale === 'es' ? 'Volver a Proyectos' : 'Back to Projects'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Imagen principal */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src={project?.image ?? ''}
              alt={title ?? 'Proyecto'}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-full">
                {category ?? ''}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {title ?? ''}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {description ?? ''}
              </p>
            </div>

            {/* Sidebar con estadísticas */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit">
              <h3 className="font-semibold text-gray-900 mb-4">
                {locale === 'es' ? 'Detalles del Proyecto' : 'Project Details'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      {locale === 'es' ? 'Beneficiarios' : 'Beneficiaries'}
                    </p>
                    <p className="font-semibold text-gray-900">
                      {(project?.beneficiaries ?? 0).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      {locale === 'es' ? 'Año' : 'Year'}
                    </p>
                    <p className="font-semibold text-gray-900">{project?.year ?? ''}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      {locale === 'es' ? 'Estado' : 'Status'}
                    </p>
                    <p className="font-semibold text-gray-900">{status ?? ''}</p>
                  </div>
                </div>
              </div>

              {/* CTA de donación */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-3">
                  {locale === 'es'
                    ? '¿Quieres apoyar este proyecto?'
                    : 'Want to support this project?'}
                </p>
                <Link
                  href="/donar"
                  className="block w-full text-center px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
                >
                  {locale === 'es' ? 'Donar Ahora' : 'Donate Now'}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
