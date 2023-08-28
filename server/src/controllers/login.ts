import { Request, Response } from 'express';
interface logInBody {
	email: string;
	password: string;
}
const login = (req: Request<any, any, logInBody>, res: Response) => {
	const { email, password } = req.body;
	console.log(email);
	console.log(password);
};

export default login;
