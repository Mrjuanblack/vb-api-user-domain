import { z } from "zod/v4";

export enum IdType {
    CC = "CC",
    CE = "CE",
    TI = "TI",
    PP = "PP",
    TE = "TE",
    PEP = "PEP",
}

export const idTypeValues = Object.values(IdType);
export const getIdTypeLabel_Long = (idType: IdType): string => {
    switch (idType) {
        case IdType.CC:
            return "Cédula de ciudadanía";
        case IdType.CE:
            return "Cédula de extranjería";
        case IdType.TI:
            return "Tarjeta de identidad";
        case IdType.PP:
            return "Pasaporte";
        case IdType.TE:
            return "Tarjeta de extranjería";
        case IdType.PEP:
            return "Permiso Especial de Permanencia";
    }
}

export const getIdTypeLabel_Short = (idType: IdType): string => {
    switch (idType) {
        case IdType.CC:
            return "CC";
        case IdType.CE:
            return "CE";
        case IdType.TI:
            return "TI";
        case IdType.PP:
            return "PP";
        case IdType.TE:
            return "TE";
        case IdType.PEP:
            return "PEP";
    }
}

export const userBasicSchema = z.object({
    id: z.number().int(),
    phone: z.string().min(10).max(20),
    name: z.string().min(1).max(30).nullable(),
    lastName: z.string().min(1).max(30).nullable(),
    email: z.email().nullable(),
    idType: z.enum(IdType),
    idNumber: z.string().min(1).max(30).nullable(),
    roles: z.array(z.string()),
});

export type User = z.infer<typeof userBasicSchema>;

export const userDBSchema = userBasicSchema.extend({
    password: z.string().min(6).max(30),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type UserDB = z.infer<typeof userDBSchema>;