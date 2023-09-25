import { ILogin, IUsuario } from "../models/interfaces/IUsuario";
import UsuariosRepository from "../repository/UsuariosRepository";

class UsuariosServices{
    static async Login(payload: ILogin): Promise<boolean>{
        const usuario: IUsuario = await UsuariosRepository.FindUsuarioByEmail(payload.email)
        return usuario?.senha === payload?.senha
    }
    static async CadastrarUsuario(payload: IUsuario){
        const response = await UsuariosRepository.CreateUsuario(payload)
        return response
    }
    static async AtualizacaoDeSenha(id: string, senha: string, newSenha: string): Promise<boolean>{
        const Usuario: IUsuario = await UsuariosRepository.FindUsuarioById(id)
        if(Usuario.senha !== senha || senha === newSenha){
            return false
        }
        await UsuariosRepository.UpdateUsuarioById(id, {senha: newSenha})
        return true
    }
    static async DeletarUsuario(id: string, senha: string){
        const Usuario: IUsuario = await UsuariosRepository.FindUsuarioById(id)
        if(!Usuario.senha){
            throw new Error("Usuário inválido")
        }
        if(Usuario.senha !== senha){
        throw new Error("Dados inválidos")
        }
        const response = await UsuariosRepository.DeleteUsuarioById(id)
        return response
    }
}

export default UsuariosServices