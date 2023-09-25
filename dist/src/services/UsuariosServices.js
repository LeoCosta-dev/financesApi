"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuariosRepository_1 = __importDefault(require("../repository/UsuariosRepository"));
class UsuariosServices {
    static async Login(payload) {
        const usuario = await UsuariosRepository_1.default.FindUsuarioByEmail(payload.email);
        return usuario?.senha === payload?.senha;
    }
    static async CadastrarUsuario(payload) {
        const response = await UsuariosRepository_1.default.CreateUsuario(payload);
        return response;
    }
    static async AtualizacaoDeSenha(id, senha, newSenha) {
        const Usuario = await UsuariosRepository_1.default.FindUsuarioById(id);
        if (Usuario.senha !== senha || senha === newSenha) {
            return false;
        }
        await UsuariosRepository_1.default.UpdateUsuarioById(id, { senha: newSenha });
        return true;
    }
    static async DeletarUsuario(id, senha) {
        const Usuario = await UsuariosRepository_1.default.FindUsuarioById(id);
        if (!Usuario.senha) {
            throw new Error("Usuário inválido");
        }
        if (Usuario.senha !== senha) {
            throw new Error("Dados inválidos");
        }
        const response = await UsuariosRepository_1.default.DeleteUsuarioById(id);
        return response;
    }
}
exports.default = UsuariosServices;
