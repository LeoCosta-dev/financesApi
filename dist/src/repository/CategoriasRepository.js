"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("./Repository"));
const Schemas_1 = __importDefault(require("../database/Schemas"));
const CATEGORIAS_COLLECTION = Schemas_1.default.Categorias();
class CategoriasRepository extends Repository_1.default {
    static async FindAllCategorias() {
        const response = await this.FindAll(CATEGORIAS_COLLECTION);
        console.log(response);
        return response;
    }
    static async FindCategoriaById(id) {
        return await this.FindByKey(CATEGORIAS_COLLECTION, "_id", id);
    }
    static async FindCategoriaByEmail(email) {
        return await this.FindByKey(CATEGORIAS_COLLECTION, "email", email);
    }
    static async UpdateCategoriaById(id, data) {
        return await this.Update(CATEGORIAS_COLLECTION, id, data);
    }
    static async DeleteCategoriaById(id) {
        return await this.Delete(CATEGORIAS_COLLECTION, id);
    }
    static async CreateCategoria(data) {
        return await this.Create(CATEGORIAS_COLLECTION, data);
    }
}
exports.default = CategoriasRepository;
