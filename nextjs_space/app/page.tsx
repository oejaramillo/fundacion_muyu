// Página principal de Fundación Muyu
// Incluye Hero, proyectos destacados, servicios y llamadas a la acción

import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ProjectsPreview } from '@/components/sections/projects-preview';
import { ServicesPreview } from '@/components/sections/services-preview';
import { DonatePreview } from '@/components/sections/donate-preview';
import { AboutPreview } from '@/components/sections/about-preview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <StatsSection /> */}
      <ProjectsPreview />
      <ServicesPreview />
      <AboutPreview />
      <DonatePreview />
    </>
  );
}
