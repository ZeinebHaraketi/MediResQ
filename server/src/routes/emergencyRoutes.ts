import { Router } from 'express';
import { createEmergency, getEmergencies } from '../controllers/emergencyController';

const router = Router();

// Créer une nouvelle urgence
router.post('/', createEmergency);

// Récupérer toutes les urgences
router.get('/', getEmergencies);

export default router;
