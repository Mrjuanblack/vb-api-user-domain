"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDBSchema = exports.userBasicSchema = exports.getIdTypeLabel_Short = exports.getIdTypeLabel_Long = exports.idTypeValues = exports.IdType = void 0;
const v4_1 = require("zod/v4");
var IdType;
(function (IdType) {
    IdType["CC"] = "CC";
    IdType["CE"] = "CE";
    IdType["TI"] = "TI";
    IdType["PP"] = "PP";
    IdType["TE"] = "TE";
    IdType["PEP"] = "PEP";
})(IdType || (exports.IdType = IdType = {}));
exports.idTypeValues = Object.values(IdType);
const getIdTypeLabel_Long = (idType) => {
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
};
exports.getIdTypeLabel_Long = getIdTypeLabel_Long;
const getIdTypeLabel_Short = (idType) => {
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
};
exports.getIdTypeLabel_Short = getIdTypeLabel_Short;
exports.userBasicSchema = v4_1.z.object({
    id: v4_1.z.number().int(),
    phone: v4_1.z.string().min(10).max(20),
    name: v4_1.z.string().min(1).max(30).nullable(),
    lastName: v4_1.z.string().min(1).max(30).nullable(),
    email: v4_1.z.email().nullable(),
    idType: v4_1.z.enum(IdType),
    idNumber: v4_1.z.string().min(1).max(30).nullable(),
    roles: v4_1.z.array(v4_1.z.string()),
});
exports.userDBSchema = exports.userBasicSchema.extend({
    password: v4_1.z.string().min(6).max(30),
    createdAt: v4_1.z.date(),
    updatedAt: v4_1.z.date(),
});
