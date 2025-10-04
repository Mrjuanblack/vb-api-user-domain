// Tipos para el endpoint create-user-attempt
import { createUserAttempt } from '@/drizzle/schema';

// Usar tipos inferidos de Drizzle - IP se obtiene automáticamente del servidor
export type CreateUserAttemptRequest = Pick<typeof createUserAttempt.$inferInsert, 'phoneNumber' | 'password'>;

// Respuesta completa para GET (uso administrativo/debug)
export type CreateUserAttemptGetResponse = typeof createUserAttempt.$inferSelect;

// Respuesta sin password por seguridad, con status del SMS para POST
export type CreateUserAttemptResponse = Omit<typeof createUserAttempt.$inferSelect, 'password'> & {
  smsStatus: string;
};

export interface CreateUserAttemptError {
  error: string;
}