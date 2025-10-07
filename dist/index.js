"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDBSchema = exports.userBasicSchema = exports.getIdTypeLabel_Short = exports.getIdTypeLabel_Long = exports.idTypeValues = exports.IdType = void 0;
// Exportar User de User.ts como UserSchema para evitar conflicto
var User_1 = require("./User");
Object.defineProperty(exports, "IdType", { enumerable: true, get: function () { return User_1.IdType; } });
Object.defineProperty(exports, "idTypeValues", { enumerable: true, get: function () { return User_1.idTypeValues; } });
Object.defineProperty(exports, "getIdTypeLabel_Long", { enumerable: true, get: function () { return User_1.getIdTypeLabel_Long; } });
Object.defineProperty(exports, "getIdTypeLabel_Short", { enumerable: true, get: function () { return User_1.getIdTypeLabel_Short; } });
Object.defineProperty(exports, "userBasicSchema", { enumerable: true, get: function () { return User_1.userBasicSchema; } });
Object.defineProperty(exports, "userDBSchema", { enumerable: true, get: function () { return User_1.userDBSchema; } });
// Exportar todas las interfaces de API
__exportStar(require("./interface-api-users"), exports);
