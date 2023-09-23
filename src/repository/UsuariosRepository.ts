import { Usuario } from "../models/interfaces/Usuario"
import Repository from "./Repository"

const USUARIOS_COLLECTION = "Usuarios"

class UsuariosRepository extends Repository {
    static async FindAllUsuarios(){
        return await this.FindAll(USUARIOS_COLLECTION)
    }
    static async FindUsuarioById(id: string): Promise<Usuario>{
        const response = await this.FindByKey(USUARIOS_COLLECTION, "_id", id)
        const usuario: Usuario = {
            id: JSON.stringify(response?._id),
            nome: `${response?.nome}`,
            senha: `${response?.senha}`,
            email: `${response?.email}`
        }
        return usuario
    }
    static async FindUsuarioByEmail(email:string): Promise<Usuario>{
        const response = await this.FindByKey(USUARIOS_COLLECTION, "email", email)
        const usuario: Usuario = {
            id: JSON.stringify(response?._id),
            nome: `${response?.nome}`,
            senha: `${response?.senha}`,
            email: `${response?.email}`
        }
        return usuario
    }
    static async UpdateUsuarioById(id: string, data: Usuario){
        return await this.Update(USUARIOS_COLLECTION, id, data)
    }
    static async DeleteUsuarioById(id:string){
        return await this.Delete(USUARIOS_COLLECTION, id)
    }
    static async CreateUsuario(data: Usuario){
        return await this.Create(USUARIOS_COLLECTION, data)
    }
}

export default UsuariosRepository