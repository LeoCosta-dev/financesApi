import { ObjectId } from "mongodb";
import { Model } from "mongoose";

class Repository {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static async create(collection: Model<any>, data: object){
        return await collection?.create(data)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static async update(collection: Model<any>, id: string, data: object){
        return await collection?.updateOne({_id: new ObjectId(id)}, {$set:{data}})
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static async delete(collection: Model<any>, id: string){
        return await collection?.findOneAndDelete({_id: new ObjectId(id)})
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static async findAll(collection: Model<any>){
        return await collection?.find({})
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static async findByKey(collection: Model<any> , key: string, value: string){
        return await collection?.findOne({[key]:value})
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async Create(collection: Model<any>, data: object){
        const response = await this.create(collection, data)
        return response._id
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async Update(collection: Model<any>, id: string, data: object){
        return await this.update(collection, id, data)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async Delete(collection: Model<any>, id: string){
        return await this.delete(collection, id)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async FindAll(collection: Model<any>){
        return await this.findAll(collection)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async FindByKey(collection: Model<any> , key: string, value: string){
        return await this.findByKey(collection, key, value)
    }
}

export default Repository