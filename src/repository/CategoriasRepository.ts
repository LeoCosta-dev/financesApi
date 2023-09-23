import { Categoria } from "src/models/interfaces/Categoria"
import Repository from "./Repository"

const CATEGORIAS_COLLECTION = "Categorias"

class CategoriasRepository extends Repository {
    static async FindAllCategorias(){
        return await this.FindAll(CATEGORIAS_COLLECTION )
    }
    static async FindCategoriaById(id: string){
        return await this.FindByKey(CATEGORIAS_COLLECTION, "_id", id)
    }
    static async FindCategoriaByEmail(email:string){
        return await this.FindByKey(CATEGORIAS_COLLECTION, "email", email)
    }
    static async UpdateCategoriaById(id: string, data: Categoria){
        return await this.Update(CATEGORIAS_COLLECTION, id, data)
    }
    static async DeleteCategoriaById(id:string){
        return await this.Delete(CATEGORIAS_COLLECTION, id)
    }
    static async CreateCategoria(data: Categoria){
        return await this.Create(CATEGORIAS_COLLECTION, data)
    }
}

export default CategoriasRepository