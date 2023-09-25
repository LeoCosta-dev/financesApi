import mongoose from "mongoose";
import { IUsuario } from "../models/interfaces/IUsuario";
import { ICategoria } from "../models/interfaces/ICategoria";
import { ITransacao } from "../models/interfaces/ITransacao";

class Schemas{
    static Usuarios(){
        const Usuario = new mongoose.Schema<IUsuario>({
            nome: String,
            email: String,
            senha: String
        })
        return mongoose.model("Usuarios", Usuario)
    }
    static Categorias(){
        const Categoria = new mongoose.Schema<ICategoria>({
            nome: String,
        })
        return mongoose.model("Categorias", Categoria)
    }
    static Transacoes(){
        const Transacao = new mongoose.Schema<ITransacao>({
            nome: String,
            descricao: String,
            categoriaId: String,
            data: String,
            tipo: String,
            usuarioId: String
        })
        return mongoose.model("Transacoes", Transacao)
    }
}

export default Schemas