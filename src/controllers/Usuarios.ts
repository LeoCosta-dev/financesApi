import { Request, Response } from "express";
import { ILogin, IUsuario } from "../models/interfaces/IUsuario";
import UsuariosServices from "../services/UsuariosServices";

class Usuarios{
    static async login(req: Request, res: Response){
        try{
            if(!req?.headers["x-password"]|| !req?.body?.email){
                throw new Error("Dados inválidos")
            }
            const payload: ILogin = {
                email: `${req.body.email}`,
                senha: `${req?.headers["x-password"]}`
            }
            const isAuth: boolean = await UsuariosServices.Login(payload)
            if(isAuth){
                res.status(204).json()
            } else
            res.status(401).json()
        }catch(e){
            const error = e as Error
            res.status(400).json({error: true, message: error.message})
        }
        
    }
    static async cadastrarUsuario(req: Request, res: Response){
        try{
            const payload: IUsuario = {
                nome: req?.body?.nome,
                email: req?.body?.email,
                senha: `${req?.headers["x-password"]}`
            }
            const response = await UsuariosServices.CadastrarUsuario(payload)
            console.log(response)
            res.json(201).json(response)
        } catch(e) {
            res.status(400).json()
        }
    }
    static async atualizarSenha(req: Request, res: Response){
        if(!req?.params?.id || !req?.headers["x-password"] || !req?.headers["x-newpassword"]){
            throw new Error("Requisição incompleta.")
        }
        try {
            await UsuariosServices.AtualizacaoDeSenha(req.params.id, `${req.headers["x-password"]}`, `${req.headers["x-newpassword"]}`)
            res.status(204).json()
        } catch (e) {
            const error = e as Error
            res.status(400).json({error: true, message: error.message})
        }
    }
    static async deletarUsuario(req: Request, res: Response){
        try {
            if(!req?.headers["x-password"] || !req?.params?.id){
                throw new Error("Dados inválidos")
            }
            UsuariosServices.DeletarUsuario(`${req.params.id}`, `${req?.headers["x-password"]}`)
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
}

export default Usuarios