// Página de detalle de proyecto individual

import { projects } from '@/lib/data';
import { ProjectDetailContent } from './project-detail';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return (projects ?? []).map((project) => ({
    slug: project?.slug ?? '',
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects?.find((p) => p?.slug === params?.slug);
  return {
    title: `${project?.title?.es ?? 'Proyecto'} | Fundación Muyu`,
    description: project?.description?.es ?? '',
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects?.find((p) => p?.slug === params?.slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
