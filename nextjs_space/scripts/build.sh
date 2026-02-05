#!/bin/bash

echo "🔧 Starting build process..."

# Generar cliente de Prisma
echo "📦 Generating Prisma client..."
npx prisma generate

# Verificar que el cliente se generó correctamente
if [ ! -d "node_modules/.prisma/client" ]; then
  echo "❌ Prisma client generation failed"
  exit 1
fi

echo "✅ Prisma client generated successfully"

# Construir Next.js
echo "🏗️ Building Next.js application..."
npx next build

echo "✅ Build completed successfully"