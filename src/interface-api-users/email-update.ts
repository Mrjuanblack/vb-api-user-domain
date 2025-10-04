// Tipos para el flujo de actualización de email
import { emailVerificationUpdate } from '@/drizzle/schema';

// =====================
// START - Iniciar actualización
// =====================
export interface EmailUpdateStartRequest {
  userId: number;
  newEmail: string;
}

export interface EmailUpdateStartResponse {
  userId: number;
  email: string;
  validUntil: Date;
  codesSentCount: number;
  emailStatus: 'pending' | 'sent' | 'failed';
  emailError?: string;
}

// =====================
// VERIFY CODE - Verificar código
// =====================
export interface EmailUpdateVerifyRequest {
  userId: number;
  code: string;
}

export interface EmailUpdateVerifyResponse {
  message: string;
  user: {
    id: number;
    phone: string | null;
    name: string | null;
    lastName: string | null;
    email: string | null;
    updatedAt: Date | null;
  };
}

// =====================
// ERROR RESPONSES
// =====================
export interface EmailUpdateError {
  error: string;
}

// =====================
// SCHEMA TYPES
// =====================
export type EmailVerificationUpdateSelect = typeof emailVerificationUpdate.$inferSelect;
export type EmailVerificationUpdateInsert = typeof emailVerificationUpdate.$inferInsert;