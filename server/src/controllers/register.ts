import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface registerBody {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const register = async (
	req: Request<any, any, registerBody>,
	res: Response
) => {
	const { firstName, lastName, email, password } = req.body;
	if (!(email && password && firstName && lastName)) {
		res.status(400).send('All input is required');
	}
	// check if user already exist in DB

	// Create user in our database

	// encrypt password
	const encryptedPassword = await bcrypt.hash(password, 10);

	// Create token
	const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
		expiresIn: '2h',
	});
	// save user token
	// user.token = token;

	// return new user
	// res.status(201).json(user);
	console.log(firstName, lastName, email, password);
};

export default register;
