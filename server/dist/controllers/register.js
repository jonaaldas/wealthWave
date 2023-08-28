"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!(email && password && firstName && lastName)) {
        res.status(400).send('All input is required');
    }
    // check if user already exist in DB
    // Create user in our database
    // encrypt password
    const encryptedPassword = await bcryptjs_1.default.hash(password, 10);
    // Create token
    const token = jsonwebtoken_1.default.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
        expiresIn: '2h',
    });
    // save user token
    // user.token = token;
    // return new user
    // res.status(201).json(user);
    console.log(firstName, lastName, email, password);
};
exports.default = register;
