import express from 'express';
import { authenticateJWT } from '../middleware/index.js';
import { getUsers, findProfile } from '../controller/users.js';

const router = express.Router();

router.get('/', getUsers);


router.post('/findprofile',authenticateJWT, findProfile);

export default router;