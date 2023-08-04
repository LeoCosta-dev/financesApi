"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_1 = require("./database/mongo");
const router_1 = require("./router/router");
class FinancesAPI {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(router_1.router);
    }
    async main() {
        try {
            console.log("Servidor inicializado, tentando conexão com MongoDB.");
            await mongo_1.Mongo.connect();
            console.log("MongoDB conectado.");
        }
        catch (error) {
            const err = error;
            console.log(err.message);
        }
    }
}
exports.default = new FinancesAPI();
