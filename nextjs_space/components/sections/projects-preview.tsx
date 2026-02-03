'use client';

// Sección de vista previa de proyectos en la página principal
import { useLanguage } from '@/lib/language-context';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/project-card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProjectsPreview() {
  const { t } = useLanguage();

  // Mostrar solo los primeros 3 proyectos
  const featuredProjects = projects?.slice?.(0, 3) ?? [];

  return (
    <section className="py-20 bg-gray-50">
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
            {t?.projects?.title ?? 'Nuestros Proyectos'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t?.projects?.subtitle ?? 'Transformando comunidades a través de investigación aplicada y acción social'}
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects?.map?.((project, index) => (
            <ProjectCard key={project?.id ?? index} project={project} index={index} />
          )) ?? null}
        </div>

        {/* Botón ver todos */}
        <div className="text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {t?.projects?.viewAll ?? 'Ver Todos los Proyectos'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
