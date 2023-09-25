"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriasRepository_1 = __importDefault(require("../repository/CategoriasRepository"));
class Categorias {
    static async buscarCategorias(req, res) {
        try {
            const response = await CategoriasRepository_1.default.FindAllCategorias();
            res.status(200).json(response);
        }
        catch (e) {
            res.status(404).json();
        }
    }
    static async cadastrar(req, res) {
        try {
            const payload = {
                nome: req?.body?.nome,
            };
            const response = await CategoriasRepository_1.default.CreateCategoria(payload);
            res.status(201).json({ message: "cadastrado com sucesso", id: response });
        }
        catch (e) {
            res.status(400).json();
        }
    }
}
exports.default = Categorias;
