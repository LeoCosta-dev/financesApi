import express from "express";
import { Mongo } from "./database/Mongo";
import { router } from "./router/router";

class FinancesAPI {
    app: express.Application
    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.app.use(router)
    }
    async main() {
        try {
            console.log("Servidor inicializado, tentando conexão com MongoDB.")
            await Mongo.connect()
            console.log("MongoDB conectado.")
        } catch (error) {
            const err = error as Error
            console.log(err.message)
        }
    }
}

export default new FinancesAPI()