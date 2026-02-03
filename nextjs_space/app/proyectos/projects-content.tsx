'use client';

// Contenido de la página de proyectos
import { useLanguage } from '@/lib/language-context';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ui/project-card';
import { motion } from 'framer-motion';
import { FolderKanban } from 'lucide-react';

export function ProjectsPageContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-600 to-green-600">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <FolderKanban className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t?.projects?.title ?? 'Nuestros Proyectos'}
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              {t?.projects?.subtitle ?? 'Transformando comunidades a través de investigación aplicada y acción social'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista de proyectos */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map?.((project, index) => (
              <ProjectCard key={project?.id ?? index} project={project} index={index} />
            )) ?? null}
          </div>
        </div>
      </section>
    </div>
  );
}
