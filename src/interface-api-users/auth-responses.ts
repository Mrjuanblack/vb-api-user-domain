import { User } from './user-responses';

/**
 * Interfaz para la respuesta de logout
 */
export interface LogoutResponse {
  success: boolean;
  message: string;
}

/**
 * Respuesta del perfil de usuario - reutiliza User base con campos opcionales
 */
export interface UserProfileResponse extends Omit<User, 'name' | 'lastName' | 'email'> {
  name?: string | null;
  lastName?: string | null;
  email?: string | null;
}