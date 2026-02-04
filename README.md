# Fundación Muyu

**Sembrando Oportunidades, Cosechando Desarrollo**

Fundación Muyu es una plataforma web moderna que combina el rigor técnico de la consultoría profesional con el compromiso genuino por el desarrollo social en Ecuador. "Muyu" significa "semilla" en kichwa, reflejando nuestra filosofía de sembrar hoy para cosechar mañana.

## 🌟 Características Principales

### 🎯 Funcionalidades Core
- **Gestión de Proyectos Sociales**: Showcase de proyectos de desarrollo social con impacto medible
- **Servicios de Consultoría**: Catálogo de servicios técnicos especializados
- **Sistema de Donaciones**: Plataforma integrada para recibir y gestionar donaciones
- **Formulario de Contacto**: Sistema de consultas y solicitudes de servicios
- **Multiidioma**: Soporte completo para español e inglés
- **Tema Dinámico**: Modo claro y oscuro con persistencia

### 📊 Áreas de Impacto
- Educación Rural
- Infraestructura de Agua Potable
- Empoderamiento de Mujeres
- Agricultura Sostenible
- Salud Comunitaria
- Desarrollo de Liderazgo Juvenil

### 🔧 Servicios de Consultoría
- Análisis Estadístico Avanzado
- Investigación de Mercado
- Diseño de Políticas Públicas
- Formulación de Proyectos Sociales
- Análisis de Inversión Social

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 14.2.28 (App Router)
- **Lenguaje**: TypeScript 5.2.2
- **Estilos**: Tailwind CSS 3.3.3
- **Componentes UI**: Radix UI + shadcn/ui
- **Animaciones**: Framer Motion 10.18.0
- **Iconos**: Lucide React 0.446.0

### Backend & Base de Datos
- **API**: Next.js API Routes
- **ORM**: Prisma 6.7.0
- **Base de Datos**: PostgreSQL
- **Validación**: Zod 3.23.8

### Funcionalidades Avanzadas
- **Internacionalización**: Sistema i18n personalizado (ES/EN)
- **Gestión de Estado**: Zustand 5.0.3 + Jotai 2.6.0
- **Formularios**: React Hook Form 7.53.0 + Yup 1.3.0
- **Notificaciones**: React Hot Toast 2.4.1 + Sonner 1.5.0
- **Gráficos**: Chart.js 4.4.9 + Recharts 2.15.3 + Plotly.js 2.35.3

### Herramientas de Desarrollo
- **Linting**: ESLint + TypeScript ESLint
- **Formateo**: Prettier
- **Build**: Next.js + Webpack 5.99.5
- **Deployment**: Configurado para múltiples entornos

## 📁 Estructura del Proyecto

```
nextjs_space/
├── app/                          # App Router (Next.js 13+)
│   ├── api/                      # API Routes
│   │   ├── contact/              # Endpoint de mensajes de contacto
│   │   └── donations/            # Endpoint de donaciones
│   ├── contacto/                 # Página de contacto
│   ├── donar/                    # Página de donaciones
│   ├── nosotros/                 # Página sobre nosotros
│   ├── proyectos/                # Páginas de proyectos
│   │   └── [slug]/               # Proyecto individual
│   ├── servicios/                # Páginas de servicios
│   │   └── [slug]/               # Servicio individual
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Página de inicio
│   └── providers.tsx             # Proveedores de contexto
├── components/                   # Componentes reutilizables
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Secciones de página
│   └── ui/                       # Componentes UI base
├── lib/                          # Utilidades y configuración
│   ├── data.ts                   # Datos de proyectos y servicios
│   ├── db.ts                     # Configuración de Prisma
│   ├── i18n.ts                   # Sistema de internacionalización
│   ├── language-context.tsx      # Contexto de idioma
│   ├── types.ts                  # Tipos TypeScript
│   └── utils.ts                  # Utilidades generales
├── prisma/                       # Esquema de base de datos
│   └── schema.prisma             # Modelos de datos
└── public/                       # Archivos estáticos
    ├── images/                   # Imágenes del proyecto
    ├── favicon.svg               # Favicon
    └── og-image.png              # Imagen Open Graph
```

## 🗄️ Modelo de Datos

### Donation (Donaciones)
```typescript
{
  id: number
  name: string              // Nombre del donante
  email: string             // Correo electrónico
  phone?: string            // Teléfono de contacto
  address?: string          // Dirección (opcional)
  city?: string             // Ciudad
  country: string           // País (default: Ecuador)
  amount: number            // Monto de la donación
  currency: string          // Moneda (default: USD)
  message?: string          // Mensaje opcional
  // anonymous: boolean     // Donación anónima (comentado temporalmente)
  status: string            // pending | completed | cancelled
  createdAt: DateTime
  updatedAt: DateTime
}
```

### ContactMessage (Mensajes de Contacto)
```typescript
{
  id: number
  name: string              // Nombre del contacto
  email: string             // Correo electrónico
  company?: string          // Empresa u organización
  phone?: string            // Teléfono
  serviceType: string       // Tipo de servicio de interés
  subject: string           // Asunto del mensaje
  message: string           // Contenido del mensaje
  status: string            // new | read | responded | archived
  createdAt: DateTime
  updatedAt: DateTime
}
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- PostgreSQL

### Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd fundacion_muyu/nextjs_space
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Configurar en `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/muyu_db"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Configurar base de datos**
```bash
npx prisma generate
npx prisma db push
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📱 Funcionalidades por Página

### 🏠 Página Principal (`/`)
- Hero section con llamadas a la acción
- Preview de proyectos destacados
- Preview de servicios de consultoría
- Sección sobre la fundación
- Preview de donaciones

### 📋 Proyectos (`/proyectos`)
- Lista completa de proyectos sociales
- Filtrado por categoría y estado
- Páginas individuales de proyecto (`/proyectos/[slug]`)
- Métricas de impacto y beneficiarios

### 🔧 Servicios (`/servicios`)
- Catálogo de servicios de consultoría
- Páginas detalladas por servicio (`/servicios/[slug]`)
- Formulario de solicitud de cotización

### 💝 Donaciones (`/donar`)
- Formulario de donación con validación
- Opciones de anonimato
- Integración con base de datos
- Confirmación y seguimiento

### 📞 Contacto (`/contacto`)
- Formulario de contacto especializado
- Selección de tipo de servicio
- Validación completa de campos
- Almacenamiento en base de datos

### 👥 Nosotros (`/nosotros`)
- Historia de la fundación
- Misión, visión y valores
- Equipo de trabajo
- Estadísticas de impacto

## 🌐 Internacionalización

### Idiomas Soportados
- **Español (es)**: Idioma principal
- **Inglés (en)**: Idioma secundario

### Características i18n
- Cambio dinámico de idioma
- Persistencia en localStorage
- Traducciones completas de UI
- Contenido multiidioma para proyectos y servicios
- URLs localizadas

### Uso del Sistema i18n
```typescript
import { useLanguage } from '@/lib/language-context';

function Component() {
  const { locale, setLocale, t } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <button onClick={() => setLocale('en')}>
        English
      </button>
    </div>
  );
}
```

## 🎨 Sistema de Diseño

### Tema y Colores
- **Modo Claro/Oscuro**: Implementado con next-themes
- **Paleta de Colores**: Sistema de design tokens con CSS variables
- **Tipografía**: Inter font family
- **Componentes**: Basados en Radix UI con personalización

### Componentes UI Disponibles
- Formularios (Input, Select, Textarea, Checkbox)
- Navegación (Button, Navigation Menu, Breadcrumb)
- Feedback (Toast, Alert, Dialog)
- Layout (Card, Separator, Tabs)
- Datos (Table, Badge, Progress)

## 📊 Métricas y Analytics

### Estadísticas de Impacto
- **45 Proyectos** completados
- **12,500 Beneficiarios** directos
- **78 Comunidades** atendidas
- **7 Años** de experiencia

### Categorías de Proyectos
- Educación
- Infraestructura
- Desarrollo Económico
- Medio Ambiente
- Salud
- Juventud

## 🔒 Seguridad y Validación

### Validación de Datos
- Validación client-side con React Hook Form + Yup
- Validación server-side en API routes
- Sanitización de inputs
- Validación de email con regex

### Seguridad de API
- Validación de tipos con TypeScript
- Manejo de errores robusto
- Rate limiting (configuración pendiente)
- CORS configurado

## 🚀 Deployment

### Scripts Disponibles
```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting
```

### Configuración de Build
- **Output**: Configurable (static/server)
- **Optimización**: Imágenes desoptimizadas para compatibilidad
- **Tracing**: Configurado para monorepo
- **TypeScript**: Validación estricta habilitada

## 🤝 Contribución

### Estructura de Commits
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Documentación
- `style:` Cambios de formato
- `refactor:` Refactorización de código
- `test:` Pruebas
- `chore:` Tareas de mantenimiento

### Desarrollo Local
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia especificada en el archivo `LICENSE`.

## 📞 Contacto

**Fundación Muyu**
- **Misión**: Impulsar el desarrollo sostenible en Ecuador
- **Visión**: Ser referentes en desarrollo social y investigación aplicada en América Latina
- **Valores**: Rigor técnico + Compromiso social

---

*Sembrando semillas de cambio para cosechar un futuro mejor* 🌱