import express from 'express';
import { login, register, checkLogin } from '../controller/auth.js';
import { authenticateJWT } from '../middleware/index.js';


const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/checkLogin',authenticateJWT, checkLogin);
export default router;