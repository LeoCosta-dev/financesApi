import { Usuario } from "src/models/interfaces/Usuario"
import Repository from "./Repository"

const USUARIOS_COLLECTION = "Usuarios"

class UsuariosRepository extends Repository {
    static async FindAllUsuarios(){
        return await this.FindAll(USUARIOS_COLLECTION)
    }
    static async FindUsuarioById(id: string){
        return await this.FindByKey(USUARIOS_COLLECTION, "_id", id)
    }
    static async FindUsuarioByEmail(email:string){
        return await this.FindByKey(USUARIOS_COLLECTION, "email", email)
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