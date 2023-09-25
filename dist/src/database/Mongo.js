"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    static async connect() {
        return await mongoose_1.default.connect(`${process.env.MONGO_URL}`);
    }
    static async close() {
        mongoose_1.default.connection.close();
    }
}
exports.Database = Database;
