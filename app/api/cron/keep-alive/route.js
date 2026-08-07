import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    // Consulta ligera a la base de datos para mantener Supabase activo
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('Error en cron keep-alive:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
