# Guía de Deployment en Vercel

## Configuración de Variables de Entorno en Vercel

Asegúrate de configurar las siguientes variables de entorno en tu proyecto de Vercel:

### Variables Requeridas:
- `DATABASE_URL`: URL de conexión a tu base de datos PostgreSQL
- `NEXTAUTH_SECRET`: Clave secreta para NextAuth (genera una aleatoria)
- `NEXTAUTH_URL`: URL de tu aplicación (ej: https://tu-app.vercel.app)

### Variables Opcionales:
- `NODE_ENV`: "production" (se configura automáticamente en Vercel)

## Configuración de la Base de Datos

1. **Vercel Postgres**: Si usas Vercel Postgres, la `DATABASE_URL` se configura automáticamente
2. **Otra base de datos**: Configura manualmente la `DATABASE_URL` en formato:
   ```
   postgresql://username:password@host:port/database
   ```

## Configuración del Proyecto en Vercel

### Framework Settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run vercel-build` (o déjalo en automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install --legacy-peer-deps`
- **Root Directory**: `nextjs_space`

### Comandos de Build:
El proyecto está configurado con los siguientes scripts:
- `postinstall`: Genera el cliente de Prisma después de instalar dependencias
- `build`: Genera Prisma y construye Next.js
- `vercel-build`: Script específico para Vercel que incluye migración de DB

## Solución de Problemas Comunes

### Error: "@prisma/client did not initialize yet"
- Asegúrate de que `DATABASE_URL` esté configurada correctamente
- Verifica que el script `postinstall` se ejecute correctamente
- El script `vercel-build` debería resolver este problema

### Error de conexión a la base de datos
- Verifica que la `DATABASE_URL` sea correcta
- Asegúrate de que la base de datos esté accesible desde Vercel
- Revisa que las tablas existan (el script ejecuta `prisma db push`)

### Errores de dependencias
- El proyecto usa `--legacy-peer-deps` para resolver conflictos de dependencias
- Si hay problemas, intenta limpiar el cache de npm en Vercel

## Pasos para Deployment

1. **Conecta tu repositorio** a Vercel
2. **Configura las variables de entorno** en el dashboard de Vercel
3. **Configura el Root Directory** como `nextjs_space`
4. **Despliega** el proyecto

El build debería completarse exitosamente con esta configuración.