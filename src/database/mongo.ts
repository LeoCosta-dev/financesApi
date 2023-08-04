import { MongoClient, Db } from "mongodb";

export class Mongo{
    static client: undefined | MongoClient
    static db: undefined | Db

    static async connect(): Promise<void> {
        const url: string = process.env.MONGO_URL || "mongodb://localhost:27017"
        const username: string = process.env.MONGO_USERNAME || "local"
        const password: string = process.env.MONGO_PASSWORD || "local"

        const client: MongoClient = new MongoClient(url, {auth:{username, password}})
        const db: Db = client.db("financialsApi")

        this.client = client
        this.db = db
    }
}