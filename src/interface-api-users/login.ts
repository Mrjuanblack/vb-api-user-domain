import { UserSummary } from './user-responses';

/**
 * Datos requeridos para realizar el login
 * Se envía en el body de la request POST /api/login
 */
export interface LoginRequest {
  phone: string;    // Número de teléfono del usuario (único)
  password: string; // Contraseña en texto plano (se hashea en el servidor)
}

/**
 * Respuesta exitosa del login
 * Se retorna cuando las credenciales son válidas
 */
export interface LoginResponse {
  success: boolean; // Siempre true en respuestas exitosas
  message: string;  // Mensaje descriptivo del resultado
  user: Omit<UserSummary, 'createdAt' | 'updatedAt'> & {
    lastName?: string;    // Apellido (opcional)
  };
}

/**
 * Respuesta de error del login
 * Se retorna cuando hay problemas de autenticación o rate limiting
 */
export interface LoginError {
  error: string;              // Mensaje de error descriptivo
  retryAfter?: number;        // Segundos hasta poder reintentar (rate limit)
  lockoutExpiresIn?: number;  // Segundos hasta que expire el bloqueo temporal
}

/**
 * Datos internos para el sistema de rate limiting
 * Se almacena en memoria para controlar intentos de login por IP
 */
export interface RateLimitData {
  attempts: number;      // Número de intentos fallidos
  lastAttempt: number;   // Timestamp del último intento
  blockedUntil?: number; // Timestamp hasta cuando está bloqueado
}