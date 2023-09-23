import { Request, Response } from "express";
import { Login } from "../models/interfaces/Usuario";
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
}

export default Usuarios