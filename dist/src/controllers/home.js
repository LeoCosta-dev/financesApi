"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
class Home {
    static initial(req, res) {
        res.status(200).send(`
            <h1> Finances API - Rota Inicial </h1>
            `);
    }
}
exports.Home = Home;
