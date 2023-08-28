"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = express();
const port = 3000;
app.use(body_parser_1.default.urlencoded({
    extended: false,
}));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
