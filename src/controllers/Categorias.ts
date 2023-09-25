import { Request, Response } from "express";
import CategoriasRepository from "../repository/CategoriasRepository";

class Categorias{
    static async buscarCategorias(req: Request, res: Response){
        try{
            const response = await CategoriasRepository.FindAllCategorias()
            res.status(200).json(response)
        } catch(e){
            res.status(404).json()
        }
    }
}

export default Categorias