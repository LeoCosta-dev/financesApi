import Schemas from "../database/Schemas"
import { IUsuario, IUsuarioUpdate } from "../models/interfaces/IUsuario"
import Repository from "./Repository"

const USUARIOS_COLLECTION = Schemas.Usuarios()

class UsuariosRepository extends Repository {
    static async FindAllUsuarios(){
        return await this.FindAll(USUARIOS_COLLECTION)
    }
    static async FindUsuarioById(id: string): Promise<IUsuario>{
        const response = await this.FindByKey(USUARIOS_COLLECTION, "_id", id)
        const usuario: IUsuario = {
            id: JSON.stringify(response?._id),
            nome: `${response?.nome}`,
            senha: `${response?.senha}`,
            email: `${response?.email}`
        }
        return usuario
    }
    static async FindUsuarioByEmail(email:string): Promise<IUsuario>{
        const response = await this.FindByKey(USUARIOS_COLLECTION, "email", email)
        const usuario: IUsuario = {
            id: JSON.stringify(response?._id),
            nome: `${response?.nome}`,
            senha: `${response?.senha}`,
            email: `${response?.email}`
        }
        return usuario
    }
    static async UpdateUsuarioById(id: string, data: IUsuarioUpdate){
        return await this.Update(USUARIOS_COLLECTION, id, data)
    }
    static async DeleteUsuarioById(id:string){
        return await this.Delete(USUARIOS_COLLECTION, id)
    }
    static async CreateUsuario(data: IUsuario){
        return await this.Create(USUARIOS_COLLECTION, data)
    }
}

export default UsuariosRepository