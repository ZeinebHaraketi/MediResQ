import { Router } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

// Route d'inscription
router.post('/register', register);

// Route de connexion
router.post('/login', login);

export default router;
