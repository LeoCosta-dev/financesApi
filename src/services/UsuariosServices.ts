import { Login, Usuario } from "../models/interfaces/Usuario";
import UsuariosRepository from "../repository/UsuariosRepository";

class UsuariosServices{
    static async Login(payload: Login): Promise<boolean>{
        const usuario: Usuario = await UsuariosRepository.FindUsuarioByEmail(payload.email)
        return usuario?.senha === payload.senha
    }
    static async CadastrarUsuario(payload: Usuario){
        const response = await UsuariosRepository.CreateUsuario(payload)
        return response
    }
}

export default UsuariosServices