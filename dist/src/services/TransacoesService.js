"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransacoesRepository_1 = __importDefault(require("../repository/TransacoesRepository"));
const UsuariosRepository_1 = __importDefault(require("../repository/UsuariosRepository"));
class TransacoesService {
    static async cadastrar(payload, senha) {
        const usuario = await UsuariosRepository_1.default.FindUsuarioByEmail(payload?.usuarioId);
        if (senha != usuario.senha) {
            throw new Error("Acesso não autorizado.");
        }
        return await TransacoesRepository_1.default.CreateTransacao(payload);
    }
    static async buscarPorId(id) {
        return TransacoesRepository_1.default.FindTransacaoById(id);
    }
    static async atualizar(payload, senha, id) {
        const usuario = await UsuariosRepository_1.default.FindUsuarioByEmail(payload?.usuarioId);
        if (senha != usuario.senha) {
            throw new Error("Acesso não autorizado.");
        }
        return await TransacoesRepository_1.default.UpdateTransacaoById(id, payload);
    }
    static async excluir(payload, senha, id) {
        const usuario = await UsuariosRepository_1.default.FindUsuarioByEmail(payload?.usuarioId);
        if (senha != usuario.senha) {
            throw new Error("Acesso não autorizado.");
        }
        return await TransacoesRepository_1.default.DeleteTransacaoById(id);
    }
    static async buscarTodasPorUsuario(usuarioId) {
        const transacoes = await TransacoesRepository_1.default.FindTransacaoByUsuarioId(usuarioId);
        return transacoes;
    }
    static async buscarTodasPorUsuarioETipo(usuarioId, tipo) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transacoes = await TransacoesRepository_1.default.FindTransacaoByUsuarioId(usuarioId);
        return transacoes.filter((transacao) => transacao.tipo === tipo);
    }
}
exports.default = TransacoesService;
