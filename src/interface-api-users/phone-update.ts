// Tipos para el flujo de actualización de teléfono

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

// CONFIRM - Confirmar cambio
export interface PhoneUpdateConfirmRequest {
  userId: number;
}

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

// Error responses
export interface PhoneUpdateError {
  error: string;
}

// Tipos para la tabla de verificación de teléfono
export interface PhoneVerificationUpdateSelect {
  id: number;
  userId: number;
  phoneNumber: string;
  code: string;
  verified: boolean;
  validUntil: Date;
  codesSentCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PhoneVerificationUpdateInsert {
  userId: number;
  phoneNumber: string;
  code: string;
  verified?: boolean;
  validUntil: Date;
  codesSentCount?: number;
}