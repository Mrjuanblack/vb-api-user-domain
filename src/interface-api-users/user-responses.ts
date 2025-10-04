// Interfaz base para el usuario
export interface User {
  id: number;
  phone: string;
  name: string | null;
  lastName: string | null;
  email: string | null;
  identityNumber: string | null;
  identityTypeId: number | null;
  role: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}

/**
 * Interfaz para la solicitud de completar perfil
 */
export interface CompleteProfileRequest {
  name: string;
  email: string;
  lastName?: string;
  identityNumber?: string;
  identityTypeId?: number;
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
  users: Partial<User>[];
  notFound: number[];
  total: number;
}

/**
 * Interfaz para la respuesta de obtener usuario por ID
 */
export interface UserByIdResponse {
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

/**
 * Interfaz para la respuesta de usuarios paginados
 */
export interface PaginatedUsersResponse {
  users: {
    id: string;
    phone: string;
    name: string | null;
    email: string | null;
    role: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  }[];
  pagination: {
    currentPage: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}