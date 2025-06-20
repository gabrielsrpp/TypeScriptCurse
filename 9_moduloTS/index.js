"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
// 2 - import de variavel
const variable_1 = require("./variable");
console.log(variable_1.x);
