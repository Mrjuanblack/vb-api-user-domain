// Tipos para el endpoint create-user-attempt

// Request para crear intento de usuario - IP se obtiene automáticamente del servidor
export interface CreateUserAttemptRequest {
  phoneNumber: string;
  password: string;
}

// Respuesta completa para GET (uso administrativo/debug)
export interface CreateUserAttemptGetResponse {
  id: number;
  phoneNumber: string;
  password: string;
  ip: string;
  createdAt: Date;
}

// Respuesta sin password por seguridad, con status del SMS para POST
export interface CreateUserAttemptResponse {
  id: number;
  phoneNumber: string;
  ip: string;
  createdAt: Date;
  smsStatus: string;
}

export interface CreateUserAttemptError {
  error: string;
}