// Página de detalle de servicio individual

import { services } from '@/lib/data';
import { ServiceDetailContent } from './service-detail';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return (services ?? []).map((service) => ({
    slug: service?.slug ?? '',
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services?.find((s) => s?.slug === params?.slug);
  return {
    title: `${service?.title?.es ?? 'Servicio'} | Fundación Muyu`,
    description: service?.shortDescription?.es ?? '',
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services?.find((s) => s?.slug === params?.slug);
  
  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
