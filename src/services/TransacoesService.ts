import { ITransacao } from "../models/interfaces/ITransacao";
import { IUsuario } from "../models/interfaces/IUsuario";
import TransacoesRepository from "../repository/TransacoesRepository";
import UsuariosRepository from "../repository/UsuariosRepository";

class TransacoesService{
    static async cadastrar(payload: ITransacao, senha: string){
        const usuario: IUsuario = await UsuariosRepository.FindUsuarioByEmail(payload?.usuarioId)
        if(senha != usuario.senha){
            throw new Error("Acesso não autorizado.")
        }
        return await TransacoesRepository.CreateTransacao(payload)
    }
    static async buscarPorId(id:string){
        return TransacoesRepository.FindTransacaoById(id) 
    }
    static async atualizar(payload: ITransacao, senha: string, id: string){
        const usuario: IUsuario = await UsuariosRepository.FindUsuarioByEmail(payload?.usuarioId)
        if(senha != usuario.senha){
            throw new Error("Acesso não autorizado.")
        }
        return await TransacoesRepository.UpdateTransacaoById(id, payload)
    }
    static async excluir(payload: ITransacao, senha: string, id: string){
        const usuario: IUsuario = await UsuariosRepository.FindUsuarioByEmail(payload?.usuarioId)
        if(senha != usuario.senha){
            throw new Error("Acesso não autorizado.")
        }
        return await TransacoesRepository.DeleteTransacaoById(id)
    }
    static async buscarTodasPorUsuario(usuarioId: string){
        const transacoes = await TransacoesRepository.FindTransacaoByUsuarioId(usuarioId)
        return transacoes
    }
    static async buscarTodasPorUsuarioETipo(usuarioId: string, tipo: string){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transacoes = await TransacoesRepository.FindTransacaoByUsuarioId(usuarioId) as Array<any>
        return transacoes.filter((transacao) => transacao.tipo === tipo)
    }
}
export default TransacoesService