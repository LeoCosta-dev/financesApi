import { Request, Response } from "express";
import { Login, Usuario } from "../models/interfaces/Usuario";
import UsuariosServices from "../services/UsuariosServices";

class Usuarios{
    static async login(req: Request, res: Response){
        if(!req?.headers["x-password"] || !req?.body?.email){
            res.status(400).json()
        }
        const payload: Login = {
            email: `${req.body.email}`,
            senha: `${req?.headers["x-password"]}`
        }
        const isAuth: boolean = await UsuariosServices.Login(payload)
        if(isAuth){
            res.status(204).json()
        }
        res.status(401).json()
    }
    static async cadastrarUsuario(req: Request, res: Response){
        try{
            const payload: Usuario = {
                nome: req?.body?.nome,
                email: req?.body?.email,
                senha: `${req?.headers["x-password"]}`
            }
            const response = await UsuariosServices.CadastrarUsuario(payload)
            res.json(201).json(response)
        } catch(e) {
            res.status(400).json()
        }
    }
}

export default Usuarios