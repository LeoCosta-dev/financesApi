import { ITransacao } from "src/models/interfaces/ITransacao"
import Repository from "./Repository"
import Schemas from "../database/Schemas"

const TRANSACOES_COLLECTION = Schemas.Transacoes()

class TransacoesRepository extends Repository {
    static async FindAllTransacoes(){
        return await this.FindAll(TRANSACOES_COLLECTION)
    }
    static async FindTransacaoById(id: string){
        return await this.FindByKey(TRANSACOES_COLLECTION, "_id", id)
    }
    static async FindTransacaoByEmail(email:string){
        return await this.FindByKey(TRANSACOES_COLLECTION, "email", email)
    }
    static async FindTransacaoByUsuarioId(usuarioId:string){
        return await this.FindByKey(TRANSACOES_COLLECTION, "usuarioId", usuarioId)
    }
    static async UpdateTransacaoById(id: string, data: ITransacao){
        return await this.Update(TRANSACOES_COLLECTION, id, data)
    }
    static async DeleteTransacaoById(id:string){
        return await this.Delete(TRANSACOES_COLLECTION, id)
    }
    static async CreateTransacao(data: ITransacao){
        return await this.Create(TRANSACOES_COLLECTION, data)
    }
}

export default TransacoesRepository