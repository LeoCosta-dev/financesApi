"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Mongo_1 = require("./database/Mongo");
const router_1 = require("./router/router");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
class FinancesAPI {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(router_1.router);
        this.app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    async main() {
        try {
            console.log("Servidor inicializado, tentando conexão com MongoDB.");
            await Mongo_1.Database.connect();
            console.log("MongoDB conectado.");
        }
        catch (error) {
            const err = error;
            console.log(err.message);
        }
    }
}
exports.default = new FinancesAPI();
