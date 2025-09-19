import { z } from "zod/v4";
export declare enum IdType {
    CC = "CC",
    CE = "CE",
    TI = "TI",
    PP = "PP",
    TE = "TE",
    PEP = "PEP"
}
export declare const idTypeValues: IdType[];
export declare const getIdTypeLabel_Long: (idType: IdType) => string;
export declare const getIdTypeLabel_Short: (idType: IdType) => string;
export declare const userBasicSchema: z.ZodObject<{
    id: z.ZodNumber;
    phone: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    lastName: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodEmail>;
    idType: z.ZodEnum<typeof IdType>;
    idNumber: z.ZodNullable<z.ZodString>;
    roles: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type User = z.infer<typeof userBasicSchema>;
export declare const userDBSchema: z.ZodObject<{
    id: z.ZodNumber;
    phone: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    lastName: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodEmail>;
    idType: z.ZodEnum<typeof IdType>;
    idNumber: z.ZodNullable<z.ZodString>;
    roles: z.ZodArray<z.ZodString>;
    password: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export type UserDB = z.infer<typeof userDBSchema>;
