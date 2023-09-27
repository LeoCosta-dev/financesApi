"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransacoesService_1 = __importDefault(require("../services/TransacoesService"));
class Transacoes {
    static async cadastrar(req, res) {
        try {
            if (!req?.headers["x-password"]) {
                throw new Error("Dados inválidos");
            }
            const payload = {
                nome: req?.body?.nome,
                descricao: req?.body?.descricao,
                categoriaId: req.body.categoriaId,
                data: req?.body?.data,
                tipo: req?.body?.tipo,
                usuarioId: req?.body?.usuarioId
            };
            const response = await TransacoesService_1.default.cadastrar(payload, `${req.headers["x-password"]}`);
            res.status(201).json({ id: response, message: "cadastrado com sucesso" });
        }
        catch (e) {
            const error = e;
            res.status(400).json({ error: true, message: error.message });
        }
    }
    static async obterPorId(req, res) {
        try {
            if (!req?.params?.id) {
                throw new Error("Requisição inválida");
            }
            const transacao = await TransacoesService_1.default.buscarPorId(req?.params?.id);
            res.status(200).json(transacao);
        }
        catch (e) {
            const error = e;
            res.status(400).json({ error: true, message: error.message });
        }
    }
    static async atualizar(req, res) {
        if (!req?.params?.id || !req?.headers["x-password"] || req.body) {
            throw new Error("Requisição incompleta.");
        }
        try {
            await TransacoesService_1.default.atualizar(req.body, req.params.id, `${req.headers["x-password"]}`);
            res.status(204).json();
        }
        catch (e) {
            const error = e;
            res.status(400).json({ error: true, message: error.message });
        }
    }
    static async deletarTransacao(req, res) {
        try {
            if (!req?.headers["x-password"] || !req?.params?.id || !req.body.usuarioId) {
                throw new Error("Dados inválidos");
            }
            TransacoesService_1.default.excluir(req.body.usuarioId, `${req.params.id}`, `${req?.headers["x-password"]}`);
        }
        catch (e) {
            const error = e;
            if (error.message === "Usuário inválido") {
                res.status(404).json({ error: true, message: error.message });
            }
            if (error.message === "Dados inválidos") {
                res.status(400).json({ error: true, message: error.message });
            }
            res.status(504).json({ error: true, message: "Erro inesperado" });
        }
    }
    static async buscarTodasPorUsuario(req, res) {
        try {
            const transacoes = TransacoesService_1.default.buscarTodasPorUsuario(req.params.id);
            res.status(200).json(transacoes);
        }
        catch (e) {
            const error = e;
            res.status(404).json({ error: true, message: error.message });
        }
    }
    static async buscarTodasEntradasPorUsuario(req, res) {
        try {
            const transacoes = TransacoesService_1.default.buscarTodasPorUsuarioETipo(req.params.id, "entrada");
            res.status(200).json(transacoes);
        }
        catch (e) {
            const error = e;
            res.status(404).json({ error: true, message: error.message });
        }
    }
    static async buscarTodasSaidasPorUsuario(req, res) {
        try {
            const transacoes = TransacoesService_1.default.buscarTodasPorUsuarioETipo(req.params.id, "saida");
            res.status(200).json(transacoes);
        }
        catch (e) {
            const error = e;
            res.status(404).json({ error: true, message: error.message });
        }
    }
}
exports.default = Transacoes;
