import mongoose, {Mongoose} from "mongoose"

export class Database{
    static async connect(): Promise<Mongoose>{
        return await mongoose.connect(`${process.env.MONGO_URL}`)
    }
    static async close(): Promise<void>{
        mongoose.connection.close()
    }
}