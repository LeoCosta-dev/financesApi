"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const port = process.env.PORT || 3000;
app_1.default.app.listen(port, app_1.default.main);
