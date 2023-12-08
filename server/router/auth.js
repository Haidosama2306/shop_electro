import express from 'express';
import { login, register } from '../controller/auth.js';
import { authenticateJWT } from '../middleware/index.js';


const router = express.Router();

router.post('/login', login);
router.post('/register', register);

export default router;