'use client';

// Proveedores globales de la aplicación
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/lib/language-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
