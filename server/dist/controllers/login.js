"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
};
exports.default = login;
