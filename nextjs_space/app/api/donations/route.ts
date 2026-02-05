// API Route para gestionar donaciones
// POST: Crear nueva donación
// GET: Obtener lista de donaciones (solo para admin en futuro)

import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Validación de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email ?? '');
}

// Validación de teléfono (formato flexible)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
  return phoneRegex.test(phone ?? '');
}

// POST: Crear nueva donación
export async function POST(request: NextRequest) {
  try {
    // Importación dinámica de Prisma para evitar problemas durante el build
    const { prisma } = await import('@/lib/db');
    
    const body = await request.json();
    const { name, email, phone, address, city, country, amount, currency, message } = body ?? {};

    // Validaciones
    if (!name?.trim()) {
      return NextResponse.json(
        { error: 'El nombre es requerido' },
        { status: 400 }
      );
    }

    if (!email?.trim() || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Correo electrónico inválido' },
        { status: 400 }
      );
    }

    // Validar teléfono si se proporciona
    if (phone?.trim() && !isValidPhone(phone.trim())) {
      return NextResponse.json(
        { error: 'Formato de teléfono inválido' },
        { status: 400 }
      );
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return NextResponse.json(
        { error: 'El monto debe ser mayor a 0' },
        { status: 400 }
      );
    }

    // Crear donación en base de datos
    const donation = await prisma.donation.create({
      data: {
        name: name?.trim() ?? '',
        email: email?.trim()?.toLowerCase() ?? '',
        phone: phone?.trim() || null,
        address: address?.trim() || null,
        city: city?.trim() || null,
        country: country?.trim() || 'Ecuador',
        amount: parsedAmount,
        currency: currency ?? 'USD',
        message: message?.trim() || null,
        // anonymous: Boolean(anonymous), // Comentado temporalmente
        status: 'pending',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Donación registrada exitosamente',
        donationId: donation?.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear donación:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// GET: Obtener donaciones (simplificado para demo)
export async function GET() {
  try {
    // Importación dinámica de Prisma para evitar problemas durante el build
    const { prisma } = await import('@/lib/db');
    
    const count = await prisma.donation.count();
    const total = await prisma.donation.aggregate({
      _sum: { amount: true },
    });

    return NextResponse.json({
      totalDonations: count ?? 0,
      totalAmount: total?._sum?.amount ?? 0,
    });
  } catch (error) {
    console.error('Error al obtener donaciones:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
