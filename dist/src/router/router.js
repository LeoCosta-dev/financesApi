"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Usuarios_1 = __importDefault(require("../controllers/Usuarios"));
const Categorias_1 = __importDefault(require("../controllers/Categorias"));
const Transacoes_1 = __importDefault(require("../controllers/Transacoes"));
exports.router = (0, express_1.Router)();
exports.router.post("/usuarios/login", Usuarios_1.default.login);
exports.router.post("/usuarios/cadastro", Usuarios_1.default.cadastrarUsuario);
exports.router.patch("/usuarios/:id/senha", Usuarios_1.default.atualizarSenha);
exports.router.delete("/usuarios/:id", Usuarios_1.default.deletarUsuario);
/**
 * Fluxo de Categorias
 */
exports.router.get("/categorias", Categorias_1.default.buscarCategorias);
exports.router.post("/categorias", Categorias_1.default.cadastrar);
/**
 * Fluxo Transações
 */
exports.router.post("/trasacoes/cadastro", Transacoes_1.default.cadastrar);
exports.router.get("/transacoes/:id", Transacoes_1.default.obterPorId);
exports.router.patch("/transacoes/:id", Transacoes_1.default.atualizar);
exports.router.delete("/transacoes/:id", Transacoes_1.default.deletarTransacao);
exports.router.get("/trasacoes/usuario/:id", Transacoes_1.default.buscarTodasPorUsuario);
exports.router.get("/transacoes/usuario/:id/entrada", Transacoes_1.default.buscarTodasEntradasPorUsuario);
exports.router.get("/transacoes/usuario/:id/saida", Transacoes_1.default.buscarTodasSaidasPorUsuario);
