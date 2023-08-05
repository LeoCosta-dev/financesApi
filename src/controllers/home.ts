import { Request, Response } from "express";

export class Home{
    static initial(req: Request, res: Response){
        res.status(200).send(
            `
            <h1> Finances API - Rota Inicial </h1>
            `
        )
    }
}