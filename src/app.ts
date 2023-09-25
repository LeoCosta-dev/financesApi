import express from "express";
import { Database } from "./database/Mongo";
import { router } from "./router/router";
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"
class FinancesAPI {
    app: express.Application
    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.app.use(router)
        this.app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    }
    async main() {
        try {
            console.log("Servidor inicializado, tentando conexão com MongoDB.")
            await Database.connect()
            console.log("MongoDB conectado.")
        } catch (error) {
            const err = error as Error
            console.log(err.message)
        }
    }
}

export default new FinancesAPI()