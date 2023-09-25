"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Repository {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async create(collection, data) {
        return await collection?.create(data);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async update(collection, id, data) {
        return await collection?.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { data } });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async delete(collection, id) {
        return await collection?.findOneAndDelete({ _id: new mongodb_1.ObjectId(id) });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async findAll(collection) {
        return await collection?.find({});
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async findByKey(collection, key, value) {
        return await collection?.findOne({ [key]: value });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async Create(collection, data) {
        const response = await this.create(collection, data);
        return response._id;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async Update(collection, id, data) {
        return await this.update(collection, id, data);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async Delete(collection, id) {
        return await this.delete(collection, id);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async FindAll(collection) {
        return await this.findAll(collection);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async FindByKey(collection, key, value) {
        return await this.findByKey(collection, key, value);
    }
}
exports.default = Repository;
