"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("./Repository"));
const Schemas_1 = __importDefault(require("../database/Schemas"));
const TRANSACOES_COLLECTION = Schemas_1.default.Transacoes();
class TransacoesRepository extends Repository_1.default {
    static async FindAllTransacoes() {
        return await this.FindAll(TRANSACOES_COLLECTION);
    }
    static async FindTransacaoById(id) {
        return await this.FindByKey(TRANSACOES_COLLECTION, "_id", id);
    }
    static async FindTransacaoByEmail(email) {
        return await this.FindByKey(TRANSACOES_COLLECTION, "email", email);
    }
    static async FindTransacaoByUsuarioId(usuarioId) {
        return await this.FindByKey(TRANSACOES_COLLECTION, "usuarioId", usuarioId);
    }
    static async UpdateTransacaoById(id, data) {
        return await this.Update(TRANSACOES_COLLECTION, id, data);
    }
    static async DeleteTransacaoById(id) {
        return await this.Delete(TRANSACOES_COLLECTION, id);
    }
    static async CreateTransacao(data) {
        return await this.Create(TRANSACOES_COLLECTION, data);
    }
}
exports.default = TransacoesRepository;
