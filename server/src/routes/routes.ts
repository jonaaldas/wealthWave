import { Router } from 'express';
import login from '../controllers/login';
import register from '../controllers/register';
const router: Router = Router();

router.post('/login', login);
router.post('/register', register);

export default router;
