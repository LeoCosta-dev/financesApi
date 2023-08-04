"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const home_1 = require("../controllers/home");
exports.router = (0, express_1.Router)();
exports.router.get("/", home_1.Home.initial);
