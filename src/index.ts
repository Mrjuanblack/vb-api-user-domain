// Exportar User de User.ts como UserSchema para evitar conflicto
export { User as UserSchema, UserDB, IdType, idTypeValues, getIdTypeLabel_Long, getIdTypeLabel_Short, userBasicSchema, userDBSchema } from './User';

// Exportar todas las interfaces de API
export * from './interface-api-users';