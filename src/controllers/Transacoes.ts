import { Request, Response } from "express";
import { ITransacao } from "../models/interfaces/ITransacao";
import TransacoesService from "../services/TransacoesService";

class Transacoes{
    static async cadastrar(req: Request, res: Response){
        try {
            if(!req?.headers["x-password"] || !req?.body?.email){
                throw new Error("Dados inválidos")
            }
            const payload: ITransacao = {
                nome: req?.body?.nome,
                descricao: req?.body?.descricao,
                categoriaId: req.body.categoriaId,
                data: req?.body?.data,
                tipo: req?.body?.tipo,
                usuarioId: req?.body?.usuarioId
            }
            const response = await TransacoesService.cadastrar(payload, `${req.headers["x-password"]}`)
            res.status(201).json({message: "cadastrado com sucesso", id: response})
        } catch (e) {
            const error = e as Error
            res.status(400).json({error: true, message: error.message})
        }
    }
    static async obterPorId(req: Request, res: Response){
        try {
            if(!req?.params?.id){
                throw new Error("Requisição inválida")
            }
            const transacao =  await TransacoesService.buscarPorId(req?.params?.id)
            res.status(200).json(transacao)
        } catch (e) {
            const error = e as Error
            res.status(400).json({error: true, message: error.message})
        }
    }
    static async atualizar(req: Request, res: Response){
        if(!req?.params?.id || !req?.headers["x-password"] || req.body){
            throw new Error("Requisição incompleta.")
        }
        try {
            await TransacoesService.atualizar(req.body, req.params.id, `${req.headers["x-password"]}`)
            res.status(204).json()
        } catch (e) {
            const error = e as Error
            res.status(400).json({error: true, message: error.message})
        }
    }
    static async deletarTransacao(req: Request, res: Response){
        try {
            if(!req?.headers["x-password"] || !req?.params?.id || !req.body.usuarioId){
                throw new Error("Dados inválidos")
            }
            TransacoesService.excluir(req.body.usuarioId, `${req.params.id}`, `${req?.headers["x-password"]}`)
        } catch (e) {
            const error = e as Error
            if(error.message === "Usuário inválido"){
                res.status(404).json({error: true, message: error.message})
            }
            if(error.message === "Dados inválidos"){
                res.status(400).json({error: true, message: error.message})
            }
            res.status(504).json({error: true, message: "Erro inesperado"})
        }
    }
    static async buscarTodasPorUsuario(req: Request, res: Response){
        try{
            const transacoes =  TransacoesService.buscarTodasPorUsuario(req.params.id)
            res.status(200).json(transacoes)
        } catch(e){
            const error = e as Error
            res.status(404).json({error: true, message: error.message})
        }
    }
    static async buscarTodasEntradasPorUsuario(req: Request, res: Response){
        try{
            const transacoes =  TransacoesService.buscarTodasPorUsuarioETipo(req.params.id, "entrada")
            res.status(200).json(transacoes)
        } catch(e){
            const error = e as Error
            res.status(404).json({error: true, message: error.message})
        }
    }
    static async buscarTodasSaidasPorUsuario(req: Request, res: Response){
        try{
            const transacoes =  TransacoesService.buscarTodasPorUsuarioETipo(req.params.id, "saida")
            res.status(200).json(transacoes)
        } catch(e){
            const error = e as Error
            res.status(404).json({error: true, message: error.message})
        }
    }
}
export default Transacoes