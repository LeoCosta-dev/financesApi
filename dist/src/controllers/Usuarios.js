"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuariosServices_1 = __importDefault(require("../services/UsuariosServices"));
class Usuarios {
    static async login(req, res) {
        try {
            if (!req?.headers["x-password"] || !req?.body?.email) {
                throw new Error("Dados inválidos");
            }
            const payload = {
                email: `${req.body.email}`,
                senha: `${req?.headers["x-password"]}`
            };
            const isAuth = await UsuariosServices_1.default.Login(payload);
            if (isAuth) {
                res.status(204).json();
            }
            else
                res.status(401).json();
        }
        catch (e) {
            const error = e;
            res.status(400).json({ error: true, message: error.message });
        }
    }
    static async cadastrarUsuario(req, res) {
        try {
            const payload = {
                nome: req?.body?.nome,
                email: req?.body?.email,
                senha: `${req?.headers["x-password"]}`
            };
            const response = await UsuariosServices_1.default.CadastrarUsuario(payload);
            res.status(201).json({ message: "cadastrado com sucesso", id: response });
        }
        catch (e) {
            res.status(400).json();
        }
    }
    static async atualizarSenha(req, res) {
        if (!req?.params?.id || !req?.headers["x-password"] || !req?.headers["x-newpassword"]) {
            throw new Error("Requisição incompleta.");
        }
        try {
            await UsuariosServices_1.default.AtualizacaoDeSenha(req.params.id, `${req.headers["x-password"]}`, `${req.headers["x-newpassword"]}`);
            res.status(204).json();
        }
        catch (e) {
            const error = e;
            res.status(400).json({ error: true, message: error.message });
        }
    }
    static async deletarUsuario(req, res) {
        try {
            if (!req?.headers["x-password"] || !req?.params?.id) {
                throw new Error("Dados inválidos");
            }
            UsuariosServices_1.default.DeletarUsuario(`${req.params.id}`, `${req?.headers["x-password"]}`);
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
}
exports.default = Usuarios;
