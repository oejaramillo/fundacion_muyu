// lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prisma: PrismaClient;

// Función para crear el cliente de Prisma de forma segura
function createPrismaClient() {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
}

// Inicialización condicional
if (process.env.NODE_ENV === 'production') {
  prisma = createPrismaClient();
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  prisma = globalForPrisma.prisma;
}

// Función para obtener Prisma de forma segura durante el build
export async function getPrismaClient() {
  // Durante el build, evitar inicializar Prisma si no hay DATABASE_URL
  if (!process.env.DATABASE_URL && process.env.NODE_ENV !== 'development') {
    throw new Error('DATABASE_URL is not defined');
  }
  
  return prisma;
}

export { prisma };

// Función para verificar la conexión de la base de datos
export async function checkDatabaseConnection() {
  try {
    const client = await getPrismaClient();
    await client.$connect();
    return true;
  } catch (error) {
    console.error('Error connecting to database:', error);
    return false;
  }
}