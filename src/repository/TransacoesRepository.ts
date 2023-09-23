import { Transacao } from "src/models/interfaces/Transacao"
import Repository from "./Repository"

const TRANSACOES_COLLECTION = "Transacoes"

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
    static async UpdateTransacaoById(id: string, data: Transacao){
        return await this.Update(TRANSACOES_COLLECTION, id, data)
    }
    static async DeleteTransacaoById(id:string){
        return await this.Delete(TRANSACOES_COLLECTION, id)
    }
    static async CreateTransacao(data: Transacao){
        return await this.Create(TRANSACOES_COLLECTION, data)
    }
}

export default TransacoesRepository