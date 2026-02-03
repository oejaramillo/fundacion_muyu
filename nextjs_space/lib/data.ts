// Datos de ejemplo para la plataforma Fundación Muyu
// Proyectos sociales, servicios de consultoría y equipo

export const projects = [
  {
    id: 1,
    slug: 'educacion-rural-chimborazo',
    title: {
      es: 'Educación Rural Chimborazo',
      en: 'Chimborazo Rural Education',
    },
    description: {
      es: 'Programa de fortalecimiento educativo en 15 escuelas rurales de la provincia de Chimborazo, beneficiando a más de 800 niños con materiales didácticos, capacitación docente y tecnología educativa.',
      en: 'Educational strengthening program in 15 rural schools in Chimborazo province, benefiting over 800 children with teaching materials, teacher training, and educational technology.',
    },
    image: 'https://cdn.abacus.ai/images/25036b55-4deb-4d76-8599-e863ea18af1c.png',
    category: { es: 'Educación', en: 'Education' },
    beneficiaries: 850,
    year: 2024,
    status: { es: 'En curso', en: 'Ongoing' },
  },
  {
    id: 2,
    slug: 'agua-potable-andes',
    title: {
      es: 'Agua Potable para los Andes',
      en: 'Clean Water for the Andes',
    },
    description: {
      es: 'Construcción de sistemas de agua potable y saneamiento básico en 8 comunidades andinas, garantizando acceso a agua limpia para 1,200 familias.',
      en: 'Construction of drinking water and basic sanitation systems in 8 Andean communities, ensuring access to clean water for 1,200 families.',
    },
    image: 'https://cdn.abacus.ai/images/044fd876-da86-44fd-a50c-b8a84821d3a3.png',
    category: { es: 'Infraestructura', en: 'Infrastructure' },
    beneficiaries: 4800,
    year: 2023,
    status: { es: 'Completado', en: 'Completed' },
  },
  {
    id: 3,
    slug: 'mujeres-emprendedoras',
    title: {
      es: 'Mujeres Emprendedoras',
      en: 'Women Entrepreneurs',
    },
    description: {
      es: 'Programa de microfinanzas y capacitación empresarial para 200 mujeres de comunidades rurales, fortaleciendo sus negocios artesanales y agrícolas.',
      en: 'Microfinance and business training program for 200 women from rural communities, strengthening their artisanal and agricultural businesses.',
    },
    image: 'https://cdn.abacus.ai/images/c6c735dc-313f-4911-b0b2-33a023e1ceed.png',
    category: { es: 'Desarrollo Económico', en: 'Economic Development' },
    beneficiaries: 200,
    year: 2024,
    status: { es: 'En curso', en: 'Ongoing' },
  },
  {
    id: 4,
    slug: 'agricultura-sostenible',
    title: {
      es: 'Agricultura Sostenible',
      en: 'Sustainable Agriculture',
    },
    description: {
      es: 'Implementación de técnicas de agricultura orgánica y conservación de suelos en 25 fincas familiares, promoviendo la seguridad alimentaria y prácticas ambientalmente responsables.',
      en: 'Implementation of organic farming techniques and soil conservation on 25 family farms, promoting food security and environmentally responsible practices.',
    },
    image: 'https://cdn.abacus.ai/images/45d1bce4-1853-4622-a084-180ad9949690.png',
    category: { es: 'Medio Ambiente', en: 'Environment' },
    beneficiaries: 125,
    year: 2023,
    status: { es: 'Completado', en: 'Completed' },
  },
  {
    id: 5,
    slug: 'salud-comunitaria',
    title: {
      es: 'Salud Comunitaria Integral',
      en: 'Comprehensive Community Health',
    },
    description: {
      es: 'Brigadas de salud preventiva y atención primaria en comunidades indígenas de la Sierra, brindando servicios médicos, odontológicos y de salud mental.',
      en: 'Preventive health brigades and primary care in indigenous Sierra communities, providing medical, dental, and mental health services.',
    },
    image: 'https://cdn.abacus.ai/images/95af8cc0-683f-4575-94a7-4b3bbfd35d27.png',
    category: { es: 'Salud', en: 'Health' },
    beneficiaries: 3200,
    year: 2024,
    status: { es: 'En curso', en: 'Ongoing' },
  },
  {
    id: 6,
    slug: 'jovenes-lideres',
    title: {
      es: 'Jóvenes Líderes del Mañana',
      en: 'Youth Leaders of Tomorrow',
    },
    description: {
      es: 'Programa de formación en liderazgo, emprendimiento social y habilidades para la vida dirigido a 150 jóvenes de comunidades rurales y periurbanas.',
      en: 'Leadership, social entrepreneurship, and life skills training program for 150 young people from rural and peri-urban communities.',
    },
    image: 'https://cdn.abacus.ai/images/79086b48-727c-472c-98e6-784f7fb1e1d7.png',
    category: { es: 'Juventud', en: 'Youth' },
    beneficiaries: 150,
    year: 2024,
    status: { es: 'En curso', en: 'Ongoing' },
  },
];

export const services = [
  {
    id: 1,
    slug: 'analisis-estadistico',
    title: {
      es: 'Análisis Estadístico',
      en: 'Statistical Analysis',
    },
    shortDescription: {
      es: 'Procesamiento y análisis avanzado de datos para toma de decisiones basada en evidencia.',
      en: 'Advanced data processing and analysis for evidence-based decision making.',
    },
    fullDescription: {
      es: 'Ofrecemos servicios completos de análisis estadístico incluyendo diseño de encuestas, procesamiento de datos, análisis descriptivo e inferencial, modelamiento predictivo y visualización de resultados. Nuestro equipo utiliza las más avanzadas herramientas estadísticas para transformar datos en insights accionables.',
      en: 'We offer comprehensive statistical analysis services including survey design, data processing, descriptive and inferential analysis, predictive modeling, and results visualization. Our team uses the most advanced statistical tools to transform data into actionable insights.',
    },
    image: 'https://cdn.abacus.ai/images/fd24aba7-b02c-4d4c-934a-4baaf4ce1f29.png',
    icon: 'BarChart3',
    features: {
      es: ['Diseño de encuestas y muestreo', 'Análisis descriptivo e inferencial', 'Modelamiento predictivo', 'Visualización de datos', 'Informes técnicos'],
      en: ['Survey design and sampling', 'Descriptive and inferential analysis', 'Predictive modeling', 'Data visualization', 'Technical reports'],
    },
  },
  {
    id: 2,
    slug: 'investigacion-mercado',
    title: {
      es: 'Investigación de Mercado',
      en: 'Market Research',
    },
    shortDescription: {
      es: 'Estudios de mercado integrales para identificar oportunidades y entender a tu audiencia.',
      en: 'Comprehensive market studies to identify opportunities and understand your audience.',
    },
    fullDescription: {
      es: 'Realizamos investigaciones de mercado cualitativas y cuantitativas para ayudar a organizaciones a comprender mejor su entorno competitivo, identificar oportunidades de crecimiento y desarrollar estrategias efectivas basadas en datos reales del mercado ecuatoriano y regional.',
      en: 'We conduct qualitative and quantitative market research to help organizations better understand their competitive environment, identify growth opportunities, and develop effective strategies based on real data from the Ecuadorian and regional market.',
    },
    image: 'https://cdn.abacus.ai/images/0d625966-4f6b-48bb-9f80-45b88b8a3b6f.png',
    icon: 'TrendingUp',
    features: {
      es: ['Estudios de competencia', 'Segmentación de mercado', 'Análisis de tendencias', 'Focus groups y entrevistas', 'Benchmarking sectorial'],
      en: ['Competitive studies', 'Market segmentation', 'Trend analysis', 'Focus groups and interviews', 'Sector benchmarking'],
    },
  },
  {
    id: 3,
    slug: 'politica-publica',
    title: {
      es: 'Política Pública',
      en: 'Public Policy',
    },
    shortDescription: {
      es: 'Asesoría técnica para el diseño, implementación y evaluación de políticas públicas.',
      en: 'Technical advisory for the design, implementation, and evaluation of public policies.',
    },
    fullDescription: {
      es: 'Brindamos consultoría especializada a gobiernos locales, ministerios y organizaciones internacionales en el ciclo completo de políticas públicas. Desde el diagnóstico y diseño hasta la implementación y evaluación de impacto, acompañamos procesos que generan cambios sostenibles.',
      en: 'We provide specialized consulting to local governments, ministries, and international organizations throughout the complete public policy cycle. From diagnosis and design to implementation and impact evaluation, we accompany processes that generate sustainable changes.',
    },
    image: 'https://cdn.abacus.ai/images/81905e36-0a57-4517-b296-1592048962bf.png',
    icon: 'Building2',
    features: {
      es: ['Diagnóstico situacional', 'Diseño de políticas', 'Evaluación de impacto', 'Indicadores y monitoreo', 'Articulación interinstitucional'],
      en: ['Situational diagnosis', 'Policy design', 'Impact evaluation', 'Indicators and monitoring', 'Inter-institutional coordination'],
    },
  },
  {
    id: 4,
    slug: 'proyectos-sociales',
    title: {
      es: 'Diseño de Proyectos Sociales',
      en: 'Social Project Design',
    },
    shortDescription: {
      es: 'Formulación y evaluación de proyectos sociales con metodologías de marco lógico.',
      en: 'Formulation and evaluation of social projects using logical framework methodologies.',
    },
    fullDescription: {
      es: 'Acompañamos a organizaciones en todo el ciclo del proyecto social: desde la identificación del problema y diseño con marco lógico, hasta la implementación, monitoreo y evaluación final. Nuestra experiencia garantiza proyectos sólidos, medibles y con alto potencial de impacto.',
      en: 'We accompany organizations throughout the social project cycle: from problem identification and logical framework design, to implementation, monitoring, and final evaluation. Our experience ensures solid, measurable projects with high impact potential.',
    },
    image: 'https://cdn.abacus.ai/images/0d625966-4f6b-48bb-9f80-45b88b8a3b6f.png',
    icon: 'Target',
    features: {
      es: ['Diagnóstico participativo', 'Marco lógico y teoría de cambio', 'Presupuestación y cronogramas', 'Sistema de M&E', 'Evaluación ex-post'],
      en: ['Participatory diagnosis', 'Logical framework and theory of change', 'Budgeting and schedules', 'M&E system', 'Ex-post evaluation'],
    },
  },
  {
    id: 5,
    slug: 'analisis-inversion',
    title: {
      es: 'Análisis de Inversión Social',
      en: 'Social Investment Analysis',
    },
    shortDescription: {
      es: 'Evaluación de rentabilidad social y retorno de inversión en proyectos de desarrollo.',
      en: 'Social profitability evaluation and return on investment in development projects.',
    },
    fullDescription: {
      es: 'Aplicamos metodologías rigurosas para evaluar la rentabilidad social de inversiones, incluyendo análisis costo-beneficio, costo-efectividad y retorno social de la inversión (SROI). Ayudamos a donantes y organizaciones a maximizar el impacto de cada dólar invertido.',
      en: 'We apply rigorous methodologies to evaluate the social profitability of investments, including cost-benefit analysis, cost-effectiveness, and social return on investment (SROI). We help donors and organizations maximize the impact of every dollar invested.',
    },
    image: 'https://cdn.abacus.ai/images/fd24aba7-b02c-4d4c-934a-4baaf4ce1f29.png',
    icon: 'PiggyBank',
    features: {
      es: ['Análisis costo-beneficio', 'Retorno social (SROI)', 'Due diligence social', 'Priorización de inversiones', 'Reportes de impacto'],
      en: ['Cost-benefit analysis', 'Social return (SROI)', 'Social due diligence', 'Investment prioritization', 'Impact reports'],
    },
  },
];

export const team = [
  {
    id: 1,
    name: 'Dra. María Elena Vásquez',
    role: {
      es: 'Directora Ejecutiva',
      en: 'Executive Director',
    },
    bio: {
      es: 'Economista con PhD en Desarrollo Sostenible por la Universidad de Oxford. Más de 15 años de experiencia liderando proyectos de desarrollo social en América Latina.',
      en: 'Economist with a PhD in Sustainable Development from Oxford University. Over 15 years of experience leading social development projects in Latin America.',
    },
    image: 'https://cdn.abacus.ai/images/285fde3b-4107-4f77-9afd-9341d8fface2.png',
  },
  {
    id: 2,
    name: 'Dr. Carlos Andrés Mendoza',
    role: {
      es: 'Director de Investigación',
      en: 'Research Director',
    },
    bio: {
      es: 'Sociólogo especializado en métodos cuantitativos y evaluación de impacto. Ha publicado más de 30 artículos en revistas indexadas sobre desarrollo rural.',
      en: 'Sociologist specialized in quantitative methods and impact evaluation. Has published over 30 articles in indexed journals on rural development.',
    },
    image: 'https://cdn.abacus.ai/images/6b70ec0d-c4e3-4465-9ac1-dfd32851c3d5.png',
  },
  {
    id: 3,
    name: 'Gabriela Fernanda Torres',
    role: {
      es: 'Coordinadora de Proyectos',
      en: 'Projects Coordinator',
    },
    bio: {
      es: 'Ingeniera en Gestión Social con maestría en Cooperación Internacional. Experta en diseño y ejecución de proyectos con enfoque de género e interculturalidad.',
      en: 'Social Management Engineer with a master\'s in International Cooperation. Expert in project design and execution with a gender and intercultural focus.',
    },
    image: 'https://cdn.abacus.ai/images/70985c4e-b6b6-45be-a7f2-c20f92a650dc.png',
  },
  {
    id: 4,
    name: 'Ing. Roberto Alejandro Paz',
    role: {
      es: 'Director de Consultoría',
      en: 'Consulting Director',
    },
    bio: {
      es: 'Economista con MBA en Estrategia Empresarial. 20 años de experiencia en consultoría para organismos internacionales, gobierno y sector privado.',
      en: 'Economist with MBA in Business Strategy. 20 years of experience in consulting for international organizations, government, and private sector.',
    },
    image: 'https://cdn.abacus.ai/images/a91ae9c8-8c03-448b-bdff-815777b94a90.png',
  },
];

// Estadísticas de impacto
export const impactStats = {
  projects: 45,
  beneficiaries: 12500,
  communities: 78,
  years: 7,
};
