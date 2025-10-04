// Tipos para envío de código por email
export interface SendEmailCodeRequest {
  userId: number; // ID del usuario
}

// Respuesta exitosa al enviar el código
export interface SendEmailCodeResponse {
  success: true;
  message: string;
  expiresAt: string; // ISO timestamp
  codesSentToday: number;
}

// Tipos para verificación de código de email
export interface VerifyEmailCodeRequest {
  userId: number;
  code: string;
}

// Respuesta de verificación exitosa
export interface VerifyEmailCodeResponse {
  success: true;
  message: string;
  verified: boolean;
}

// Tipos de error
export interface EmailVerificationError {
  error: string;
}