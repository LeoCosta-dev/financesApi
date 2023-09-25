"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schemas_1 = __importDefault(require("../database/Schemas"));
const Repository_1 = __importDefault(require("./Repository"));
const USUARIOS_COLLECTION = Schemas_1.default.Usuarios();
class UsuariosRepository extends Repository_1.default {
    static async FindAllUsuarios() {
        return await this.FindAll(USUARIOS_COLLECTION);
    }
    static async FindUsuarioById(id) {
        const response = await this.FindByKey(USUARIOS_COLLECTION, "_id", id);
        const usuario = {
            id: JSON.stringify(response?._id),
            nome: `${response?.nome}`,
            senha: `${response?.senha}`,
            email: `${response?.email}`
        };
        return usuario;
    }
    static async FindUsuarioByEmail(email) {
        const response = await this.FindByKey(USUARIOS_COLLECTION, "email", email);
        const usuario = {
            id: JSON.stringify(response?._id),
            nome: `${response?.nome}`,
            senha: `${response?.senha}`,
            email: `${response?.email}`
        };
        return usuario;
    }
    static async UpdateUsuarioById(id, data) {
        return await this.Update(USUARIOS_COLLECTION, id, data);
    }
    static async DeleteUsuarioById(id) {
        return await this.Delete(USUARIOS_COLLECTION, id);
    }
    static async CreateUsuario(data) {
        return await this.Create(USUARIOS_COLLECTION, data);
    }
}
exports.default = UsuariosRepository;
