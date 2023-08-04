import express from "express";
import { config } from "dotenv";

config()

const app = express()

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhos:${port}`)
})