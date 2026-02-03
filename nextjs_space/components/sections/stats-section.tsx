'use client';

// Sección de estadísticas de impacto con contadores animados
import { useLanguage } from '@/lib/language-context';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { impactStats } from '@/lib/data';
import { motion } from 'framer-motion';
import { FolderKanban, Users, MapPin, Clock } from 'lucide-react';

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: FolderKanban,
      value: impactStats?.projects ?? 0,
      label: t?.stats?.projects ?? 'Proyectos Completados',
      suffix: '+',
    },
    {
      icon: Users,
      value: impactStats?.beneficiaries ?? 0,
      label: t?.stats?.beneficiaries ?? 'Beneficiarios Directos',
      suffix: '+',
    },
    {
      icon: MapPin,
      value: impactStats?.communities ?? 0,
      label: t?.stats?.communities ?? 'Comunidades Atendidas',
      suffix: '',
    },
    {
      icon: Clock,
      value: impactStats?.years ?? 0,
      label: t?.stats?.years ?? 'Años de Experiencia',
      suffix: '',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 relative overflow-hidden">
      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 border-2 border-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats?.map?.((stat, index) => {
            const Icon = stat?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4">
                  {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter
                    end={stat?.value ?? 0}
                    suffix={stat?.suffix ?? ''}
                  />
                </div>
                <div className="text-white/80 text-sm">{stat?.label ?? ''}</div>
              </motion.div>
            );
          }) ?? null}
        </div>
      </div>
    </section>
  );
}
