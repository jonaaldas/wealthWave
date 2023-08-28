import express = require('express');
import bodyParser from 'body-parser';
import cors from 'cors';
import { Request, Response } from 'express';
import api from './routes/routes';
const app = express();
const port = 3000;

app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

app.use(bodyParser.json());

app.use(cors());

app.use('/api', api);

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
