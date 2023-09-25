import { ICategoria } from "src/models/interfaces/ICategoria"
import Repository from "./Repository"
import Schemas from "../database/Schemas"

const CATEGORIAS_COLLECTION = Schemas.Transacoes()

class CategoriasRepository extends Repository {
    static async FindAllCategorias(){
        const response = await this.FindAll(CATEGORIAS_COLLECTION )
        console.log(response)
        return response
    }
    static async FindCategoriaById(id: string){
        return await this.FindByKey(CATEGORIAS_COLLECTION, "_id", id)
    }
    static async FindCategoriaByEmail(email:string){
        return await this.FindByKey(CATEGORIAS_COLLECTION, "email", email)
    }
    static async UpdateCategoriaById(id: string, data: ICategoria){
        return await this.Update(CATEGORIAS_COLLECTION, id, data)
    }
    static async DeleteCategoriaById(id:string){
        return await this.Delete(CATEGORIAS_COLLECTION, id)
    }
    static async CreateCategoria(data: ICategoria){
        return await this.Create(CATEGORIAS_COLLECTION, data)
    }
}

export default CategoriasRepository