import express from "express";
import { Mongo } from "./database/mongo";
import { routers } from "./routers/routers";

export class FinancesAPI {
    static app: express.Application = express()

    static async main() {
        try {
            console.log("Servidor inicializado, tentando conexão com MongoDB.")
            await Mongo.connect()
            console.log("MongoDB conectado.")
        } catch (error) {
            const err = error as Error
            console.log(err.message)
        }
        this.app.use(express.json())
        this.app.use(routers)
    }
}
