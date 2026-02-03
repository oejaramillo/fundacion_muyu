// Sistema de internacionalización (i18n) para soporte bilingüe
// Idiomas soportados: Español (es) e Inglés (en)

export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en'];

// Diccionario de traducciones
export const translations = {
  es: {
    // Navegación
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      services: 'Servicios',
      donate: 'Donar',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    // Hero Section
    hero: {
      title: 'Sembrando Oportunidades,',
      titleHighlight: 'Cosechando Desarrollo',
      subtitle: 'Combinamos el rigor técnico de la consultoría profesional con el compromiso genuino por el desarrollo social en Ecuador.',
      ctaProjects: 'Ver Proyectos',
      ctaServices: 'Nuestros Servicios',
    },
    // Sección de Proyectos
    projects: {
      title: 'Nuestros Proyectos',
      subtitle: 'Transformando comunidades a través de investigación aplicada y acción social',
      viewAll: 'Ver Todos los Proyectos',
      learnMore: 'Conocer Más',
    },
    // Sección de Servicios
    services: {
      title: 'Servicios de Consultoría',
      subtitle: 'Soluciones técnicas especializadas para organizaciones que buscan generar impacto medible',
      viewAll: 'Ver Todos los Servicios',
      requestQuote: 'Solicitar Cotización',
    },
    // Sección de Donaciones
    donate: {
      title: 'Apoya Nuestra Misión',
      subtitle: 'Tu donación impulsa proyectos que traen desarrollo y fortalecen el tejido social en Ecuador',
      amountLabel: 'Monto de Donación',
      nameLabel: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      messageLabel: 'Mensaje (Opcional)',
      anonymousLabel: 'Deseo que mi donación sea anónima',
      submitButton: 'Realizar Donación',
      thankYou: '¡Gracias por tu generosidad!',
      successMessage: 'Tu donación ha sido registrada exitosamente. Te contactaremos pronto con los detalles para completar el proceso.',
    },
    // Sección Sobre Nosotros
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Conoce la historia y el equipo detrás de Muyu',
      missionTitle: 'Nuestra Misión',
      missionText: 'Impulsar el desarrollo sostenible en Ecuador a través de proyectos de desarrollo y servicios de consultoría técnica especializada.',
      visionTitle: 'Nuestra Visión',
      visionText: 'Ser referentes en el desarrollo social y la investigación aplicada en América Latina, reconocidos por la excelencia técnica y el compromiso genuino con la comunida.',
      historyTitle: 'Nuestra Historia',
      historyText: 'Fundada en 2025, Muyu nació de la convicción de que el rigor científico y el compromiso social pueden trabajar juntos para generar cambios duraderos. "Muyu" significa "semilla" en kichwa, reflejando nuestra filosofía de sembrar hoy para cosechar mañana.',
      teamTitle: 'Nuestro Equipo',
    },
    // Formulario de Contacto
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Tienes alguna pregunta o quieres apoyar nuestra misión?',
      nameLabel: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      companyLabel: 'Empresa / Organización',
      phoneLabel: 'Teléfono',
      serviceLabel: 'Servicio de Interés',
      subjectLabel: 'Asunto',
      messageLabel: 'Mensaje',
      submitButton: 'Enviar Mensaje',
      successMessage: '¡Mensaje enviado! Nuestro equipo te contactará pronto.',
      selectService: 'Selecciona un servicio',
    },
    // Footer
    footer: {
      tagline: 'Sembrando el desarrollo en Ecuador',
      rights: 'Todos los derechos reservados',
      quickLinks: 'Enlaces Rápidos',
    },
    // Estadísticas
    stats: {
      projects: 'Proyectos Completados',
      beneficiaries: 'Beneficiarios Directos',
      communities: 'Comunidades Atendidas',
      years: 'Años de Experiencia',
    },
    // Tipos de servicio
    serviceTypes: {
      statistical: 'Análisis Estadístico',
      market: 'Investigación de Mercado',
      policy: 'Política Pública',
      social: 'Proyectos Sociales',
      investment: 'Análisis de Inversión',
      other: 'Otro',
    },
    // Mensajes comunes
    common: {
      loading: 'Cargando...',
      error: 'Ha ocurrido un error. Por favor, intenta de nuevo.',
      required: 'Este campo es requerido',
      invalidEmail: 'Correo electrónico inválido',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      donate: 'Donate',
      about: 'About Us',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Planting Opportunities,',
      titleHighlight: 'Harvesting Development',
      subtitle: 'We combine the technical rigor of professional consulting with genuine commitment to social development in Ecuador.',
      ctaProjects: 'View Projects',
      ctaServices: 'Our Services',
    },
    // Projects Section
    projects: {
      title: 'Our Projects',
      subtitle: 'Transforming communities through applied research and social action',
      viewAll: 'View All Projects',
      learnMore: 'Learn More',
    },
    // Services Section
    services: {
      title: 'Consulting Services',
      subtitle: 'Specialized technical solutions for organizations seeking measurable impact',
      viewAll: 'View All Services',
      requestQuote: 'Request Quote',
    },
    // Donations Section
    donate: {
      title: 'Support Our Mission',
      subtitle: 'Your donation drives projects brings development and strengthens the social fabric in Ecuador',
      amountLabel: 'Donation Amount',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      messageLabel: 'Message (Optional)',
      anonymousLabel: 'I wish my donation to be anonymous',
      submitButton: 'Make Donation',
      thankYou: 'Thank you for your generosity!',
      successMessage: 'Your donation has been registered successfully. We will contact you soon with details to complete the process.',
    },
    // About Section
    about: {
      title: 'About Us',
      subtitle: 'Meet the history and team behind Fundación Muyu',
      missionTitle: 'Our Mission',
      missionText: 'To drive sustainable development in Ecuador through social impact projects and specialized technical consulting services.',
      visionTitle: 'Our Vision',
      visionText: 'To be leaders in social development and applied research in Latin America, recognized for technical excellence and genuine commitment to the community.',
      historyTitle: 'Our History',
      historyText: 'Founded in 2025, Muyu was born from the conviction that scientific rigor and social commitment can work together to generate lasting change. "Muyu" means "seed" in Kichwa, reflecting our philosophy of planting today to harvest tomorrow.',
      teamTitle: 'Our Team',
    },
    // Contact Form
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you achieve your social impact goals',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      companyLabel: 'Company / Organization',
      phoneLabel: 'Phone',
      serviceLabel: 'Service of Interest',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitButton: 'Send Message',
      successMessage: 'Message sent! Our team will contact you soon.',
      selectService: 'Select a service',
    },
    // Footer
    footer: {
      tagline: 'Planting development in Ecuador',
      rights: 'All rights reserved',
      quickLinks: 'Quick Links',
    },
    // Statistics
    stats: {
      projects: 'Completed Projects',
      beneficiaries: 'Direct Beneficiaries',
      communities: 'Communities Served',
      years: 'Years of Experience',
    },
    // Service Types
    serviceTypes: {
      statistical: 'Statistical Analysis',
      market: 'Market Research',
      policy: 'Public Policy',
      social: 'Social Projects',
      investment: 'Investment Analysis',
      other: 'Other',
    },
    // Common messages
    common: {
      loading: 'Loading...',
      error: 'An error occurred. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
    },
  },
};

// Hook para obtener traducciones
export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations[defaultLocale];
}

// Función para obtener una traducción específica
export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[locale] ?? translations[defaultLocale];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  
  return typeof result === 'string' ? result : key;
}
