#!/bin/bash

# Script de build para Vercel
echo "🚀 Iniciando build de Fundación Muyu..."

# Instalar dependencias con legacy peer deps
echo "📦 Instalando dependencias..."
npm install --legacy-peer-deps

# Generar cliente de Prisma
echo "🗄️ Generando cliente de Prisma..."
npx prisma generate

# Build de Next.js
echo "⚡ Construyendo aplicación..."
npm run build

echo "✅ Build completado exitosamente!"