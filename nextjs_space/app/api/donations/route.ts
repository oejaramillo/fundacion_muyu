// API Route para gestionar donaciones
// POST: Crear nueva donación
// GET: Obtener lista de donaciones (solo para admin en futuro)

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

// Validación de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email ?? '');
}

// POST: Crear nueva donación
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, amount, currency, message, anonymous } = body ?? {};

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
        amount: parsedAmount,
        currency: currency ?? 'USD',
        message: message?.trim() || null,
        anonymous: Boolean(anonymous),
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
