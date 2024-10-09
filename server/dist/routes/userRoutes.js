"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Créer un nouvel utilisateur
router.post('/', userController_1.createUser);
// Récupérer tous les utilisateurs
router.get('/', userController_1.getUsers);
// Récupérer un utilisateur par ID
router.get('/:id', userController_1.getUserById);
// Mettre à jour un utilisateur par ID
router.put('/:id', userController_1.updateUser);
// Supprimer un utilisateur par ID
router.delete('/:id', userController_1.deleteUser);
exports.default = router;
