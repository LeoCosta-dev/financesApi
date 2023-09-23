import { ObjectId } from "mongodb";
import { Mongo } from "src/database/mongo";

class Repository {
    private static async create(colection: string, data: object){
        return await Mongo.db?.collection(colection).insertOne(data)
    }
    private static async update(collection: string, id: string, data: object){
        return await Mongo.db?.collection(collection).updateOne({_id: new ObjectId(id)}, {$set:{data}})
    }
    private static async delete(collection: string, id: string){
        return await Mongo.db?.collection(collection).findOneAndDelete({_id: new ObjectId(id)})
    }
    private static async findAll(collection: string){
        return await Mongo.db?.collection(collection).find()
    }
    private static async findByKey(collection:string , key: string, value: string){
        return await Mongo.db?.collection(collection).findOne({[key]:value})
    }
    static async Create(colection: string, data: object){
        return await this.create(colection, data)
    }
    static async Update(collection: string, id: string, data: object){
        return await this.update(collection, id, data)
    }
    static async Delete(collection: string, id: string){
        return await this.delete(collection, id)
    }
    static async FindAll(collection: string){
        return await this.findAll(collection)
    }
    static async FindByKey(collection:string , key: string, value: string){
        return await this.findByKey(collection, key, value)
    }
}

export default Repository