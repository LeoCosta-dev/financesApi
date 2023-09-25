"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Schemas {
    static Usuarios() {
        const Usuario = new mongoose_1.default.Schema({
            nome: String,
            email: String,
            senha: String
        });
        return mongoose_1.default.model("Usuarios", Usuario);
    }
    static Categorias() {
        const Categoria = new mongoose_1.default.Schema({
            nome: String,
        });
        return mongoose_1.default.model("Categorias", Categoria);
    }
    static Transacoes() {
        const Transacao = new mongoose_1.default.Schema({
            nome: String,
            descricao: String,
            categoriaId: String,
            data: String,
            tipo: String,
            usuarioId: String
        });
        return mongoose_1.default.model("Transacoes", Transacao);
    }
}
exports.default = Schemas;
