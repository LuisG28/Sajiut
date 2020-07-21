"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const justificantesControllers_1 = __importDefault(require("../controllers/justificantesControllers"));
class JustificantesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', justificantesControllers_1.default.CreateJust);
        this.router.put('/:id', justificantesControllers_1.default.UpdateJust);
        this.router.get('/:id', justificantesControllers_1.default.GetJustById);
    }
}
const justificanteRoutes = new JustificantesRoutes();
exports.default = justificanteRoutes.router;
