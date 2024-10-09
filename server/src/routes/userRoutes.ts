import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

// Créer un nouvel utilisateur
router.post('/', createUser);

// Récupérer tous les utilisateurs
router.get('/', getUsers);

// Récupérer un utilisateur par ID
router.get('/:id', getUserById);

// Mettre à jour un utilisateur par ID
router.put('/:id', updateUser);

// Supprimer un utilisateur par ID
router.delete('/:id', deleteUser);

export default router;
