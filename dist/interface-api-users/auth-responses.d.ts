/**
 * Interfaz para la respuesta de logout
 */
export interface LogoutResponse {
    success: boolean;
    message: string;
}
/**
 * Interfaz para la respuesta del perfil de usuario
 */
export interface UserProfileResponse {
    id: number;
    phone: string;
    name?: string;
    lastName?: string;
    email?: string;
    role: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}
