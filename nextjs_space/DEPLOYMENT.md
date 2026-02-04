# Deployment Guide - Fundación Muyu

## 🚀 Vercel Deployment Configuration

### Required Settings in Vercel Dashboard:

#### Framework Settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: Leave empty (auto-detected)
- **Install Command**: `npm install --legacy-peer-deps`
- **Development Command**: `npm run dev`

#### Root Directory:
- **Root Directory**: `nextjs_space`

#### Environment Variables:
```
DATABASE_URL=your_postgresql_connection_string
NEXTAUTH_URL=https://your-domain.vercel.app
```

### Files Configuration:

1. **`.npmrc`** - Configures npm to use legacy peer deps
2. **`.nvmrc`** - Specifies Node.js version 20
3. **`vercel.json`** - Vercel-specific configuration
4. **`build.sh`** - Custom build script (optional)

### Troubleshooting:

#### ESLint Dependency Conflicts:
- Fixed by downgrading `@typescript-eslint/*` packages to v7.18.0
- Added `.npmrc` with `legacy-peer-deps=true`

#### Prisma Configuration:
- Removed absolute output path from schema.prisma
- Added `postinstall` script to generate Prisma client

#### AWS SDK Compatibility:
- Updated to compatible versions for Node.js 18+

### Build Process:
1. Install dependencies with `--legacy-peer-deps`
2. Generate Prisma client
3. Build Next.js application
4. Deploy to Vercel

### Post-Deployment:
1. Verify database connection
2. Test API endpoints
3. Check form submissions
4. Validate internationalization

## 🔧 Local Development

```bash
cd nextjs_space
npm install --legacy-peer-deps
npm run dev
```

## 📊 Build Verification

```bash
npm run build
npm start
```

The application should build successfully with no TypeScript or ESLint errors.