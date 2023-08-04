import express from "express";
import { config } from "dotenv";
import { Mongo } from "./src/database/mongo";

class FinancesAPI {
    static async main() {
        config()

        const app = express()

        const port = process.env.PORT || 3000

        try {
            await Mongo.connect()
            app.listen(port, () => {
                console.log(`Servidor rodando em http://localhos:${port}`)
            })
        } catch (error) {
            const err = error as Error
            console.log(err.message)
        }
    }
}

FinancesAPI.main()
