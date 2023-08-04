"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
const mongodb_1 = require("mongodb");
class Mongo {
    static client;
    static db;
    static async connect() {
        const url = process.env.MONGO_URL || "mongodb://localhost:27017";
        const username = process.env.MONGO_USERNAME || "local";
        const password = process.env.MONGO_PASSWORD || "local";
        const client = new mongodb_1.MongoClient(url, { auth: { username, password } });
        const db = client.db("financialsApi");
        this.client = client;
        this.db = db;
    }
}
exports.Mongo = Mongo;
