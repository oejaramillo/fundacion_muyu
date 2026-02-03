// API Route para mensajes de contacto
// POST: Crear nuevo mensaje de contacto

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

// Validación de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email ?? '');
}

// POST: Crear nuevo mensaje de contacto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, serviceType, subject, message } = body ?? {};

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

    if (!serviceType?.trim()) {
      return NextResponse.json(
        { error: 'El tipo de servicio es requerido' },
        { status: 400 }
      );
    }

    if (!subject?.trim()) {
      return NextResponse.json(
        { error: 'El asunto es requerido' },
        { status: 400 }
      );
    }

    if (!message?.trim()) {
      return NextResponse.json(
        { error: 'El mensaje es requerido' },
        { status: 400 }
      );
    }

    // Crear mensaje en base de datos
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: name?.trim() ?? '',
        email: email?.trim()?.toLowerCase() ?? '',
        company: company?.trim() || null,
        phone: phone?.trim() || null,
        serviceType: serviceType?.trim() ?? '',
        subject: subject?.trim() ?? '',
        message: message?.trim() ?? '',
        status: 'new',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado exitosamente',
        messageId: contactMessage?.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear mensaje de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
