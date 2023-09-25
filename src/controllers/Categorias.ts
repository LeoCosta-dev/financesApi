import { Request, Response } from "express";
import CategoriasRepository from "../repository/CategoriasRepository";
import { ICategoria } from "../models/interfaces/ICategoria";

class Categorias{
    static async buscarCategorias(req: Request, res: Response){
        try{
            const response = await CategoriasRepository.FindAllCategorias()
            res.status(200).json(response)
        } catch(e){
            res.status(404).json()
        }
    }
    static async cadastrar(req: Request, res: Response){
        try{
            const payload: ICategoria = {
                nome: req?.body?.nome,
            }
            const response = await CategoriasRepository.CreateCategoria(payload)
            res.status(201).json({message: "cadastrado com sucesso", id: response})
        } catch(e) {
            res.status(400).json()
        }
    }
}

export default Categorias