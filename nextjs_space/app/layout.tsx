// Layout principal de la aplicación
// Incluye proveedores de tema e idioma, header y footer

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL ?? 'http://localhost:3000';
  
  return {
    title: 'Fundación Muyu | Desarrollo Social y Consultoría en Ecuador',
    description: 'Fundación Muyu combina el rigor técnico de la consultoría profesional con el compromiso genuino por el desarrollo social en Ecuador. Sembrando semillas de cambio.',
    keywords: ['fundación', 'Ecuador', 'desarrollo social', 'consultoría', 'proyectos sociales', 'investigación', 'ONG'],
    authors: [{ name: 'Fundación Muyu' }],
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: 'Fundación Muyu | Impacto Social + Rigor Técnico',
      description: 'Sembrando semillas de cambio en Ecuador. Proyectos de desarrollo social y servicios de consultoría especializada.',
      url: baseUrl,
      siteName: 'Fundación Muyu',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Fundación Muyu - Desarrollo Social y Consultoría',
        },
      ],
      locale: 'es_EC',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Fundación Muyu | Desarrollo Social en Ecuador',
      description: 'Combinamos rigor técnico con compromiso social para generar impacto duradero.',
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
