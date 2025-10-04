// Tipos para el flujo de actualización de teléfono
import { phoneVerificationUpdate } from '@/drizzle/schema';

// START - Iniciar actualización
export interface PhoneUpdateStartRequest {
  userId: number;
  newPhoneNumber: string;
}

export interface PhoneUpdateStartResponse {
  userId: number;
  phoneNumber: string;
  validUntil: Date;
  codesSentCount: number;
  smsStatus: 'pending' | 'sent' | 'failed';
}

// VERIFY CODE - Verificar código
export interface PhoneUpdateVerifyRequest {
  userId: number;
  code: string;
}

// Respuesta de verificación exitosa
export interface PhoneUpdateVerifyResponse {
  userId: number;
  phoneNumber: string;
  verified: boolean;
  message: string;
}

// CONFIRM - Confirmar actualización
export interface PhoneUpdateConfirmRequest {
  userId: number;
}

// Respuesta exitosa al confirmar la actualización
export interface PhoneUpdateConfirmResponse {
  message: string;
  user: {
    id: number;
    phone: string;
    name: string | null;
    lastName: string | null;
    email: string | null;
    updatedAt: Date | null;
  };
}

// ERROR - Respuestas de error
export interface PhoneUpdateError {
  error: string;
}

// TIPOS INFERIDOS DE DRIZZLE
export type PhoneVerificationUpdateSelect = typeof phoneVerificationUpdate.$inferSelect;
export type PhoneVerificationUpdateInsert = typeof phoneVerificationUpdate.$inferInsert;