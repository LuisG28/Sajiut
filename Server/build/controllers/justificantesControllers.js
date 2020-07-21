"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class JustificantesControllers {
    CreateJust(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let vopcion = "CREATE";
            const { idjust, mot, fechi, fechf, resp, idestatus, idestudiante, idtut } = req.body;
            let SP = 'call JUST_ADM_Justificante(?,?,?,?,?,?,?,?,?)';
            yield database_1.default.query(SP, [vopcion, idjust, mot, fechi, fechf, resp, idestatus, idestudiante, idtut]);
            console.log(req.body);
            res.json({ texto: 'Justificante Creado' });
        });
    }
    GetJustById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let SP = 'call JUST_GetJustById(?)';
            const { id } = req.params;
            yield database_1.default.query(SP, [id], function (err, result, field) {
                if (err) {
                    throw err;
                }
                else if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: 'el usuario no existe' });
                }
            });
        });
    }
    UpdateJust(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { mot, fechi, fechf, resp, idestatus, idestudiante, idtut } = req.body;
                let vopcion = "UPDATE";
                let SP = 'call JUST_ADM_Justificante(?,?,?,?,?,?,?,?,?)';
                yield database_1.default.query(SP, [vopcion, id, mot, fechi, fechf, resp, idestatus, idestudiante, idtut], function (err, result) {
                    if (err)
                        throw err;
                    res.json({ text: "Justificante actualizado" });
                });
            }
            catch (error) {
                res.status(404).json({ texto: 'algo salio mal' });
            }
        });
    }
}
const justificantesControllers = new JustificantesControllers();
exports.default = justificantesControllers;
