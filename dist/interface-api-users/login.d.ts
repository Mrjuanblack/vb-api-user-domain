import { UserSummary } from './user-responses';
/**
 * Datos requeridos para realizar el login
 * Se envía en el body de la request POST /api/login
 */
export interface LoginRequest {
    phone: string;
    password: string;
}
/**
 * Respuesta exitosa del login
 * Se retorna cuando las credenciales son válidas
 */
export interface LoginResponse {
    success: boolean;
    message: string;
    user: Omit<UserSummary, 'createdAt' | 'updatedAt'> & {
        lastName?: string | null;
    };
}
/**
 * Respuesta de error del login
 * Se retorna cuando hay problemas de autenticación o rate limiting
 */
export interface LoginError {
    error: string;
    retryAfter?: number;
    lockoutExpiresIn?: number;
}
/**
 * Datos internos para el sistema de rate limiting
 * Se almacena en memoria para controlar intentos de login por IP
 */
export interface RateLimitData {
    attempts: number;
    lastAttempt: number;
    blockedUntil?: number;
}
