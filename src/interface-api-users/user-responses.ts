// Interfaz base para el usuario completo (API responses)
export interface User {
  id: number;
  phone: string;
  name: string | null;
  lastName: string | null;
  email: string | null;
  identityNumber: string | null;
  identityTypeId: number | null;
  role: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

// Versión reducida del usuario para listados - omite campos específicos de User
export interface UserSummary extends Omit<User, 'lastName' | 'identityNumber' | 'identityTypeId'> {}

/**
 * Interfaz para la solicitud de completar perfil - reutiliza tipos de User
 */
export interface CompleteProfileRequest extends Pick<User, 'name' | 'email' | 'lastName' | 'identityNumber' | 'identityTypeId'> {
  // Sobrescribimos para hacer name y email requeridos
  name: string;
  email: string;
}

/**
 * Interfaz para la respuesta de completar perfil
 */
export interface CompleteProfileResponse {
  message: string;
  user: Partial<User>;
  emailVerificationSent: boolean;
  emailVerification?: {
    expiresAt: string;
    codesSentToday: number;
  };
  emailError?: string;
}

/**
 * Interfaz para la solicitud de obtener usuarios en bulk
 */
export interface BulkUsersRequest {
  ids: number[];
}

/**
 * Interfaz para la respuesta de obtener usuarios en bulk
 */
export interface BulkUsersResponse {
  users: UserSummary[];
  notFound: number[];
  total: number;
}

/**
 * Interfaz para la respuesta de obtener usuario por ID - extiende User completo
 */
export interface UserByIdResponse extends User {}

/**
 * Interfaz para la respuesta de usuarios paginados
 */
export interface PaginatedUsersResponse {
  users: UserSummary[];
  pagination: {
    currentPage: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}