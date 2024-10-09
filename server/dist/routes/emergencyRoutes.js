"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emergencyController_1 = require("../controllers/emergencyController");
const router = (0, express_1.Router)();
// Créer une nouvelle urgence
router.post('/', emergencyController_1.createEmergency);
// Récupérer toutes les urgences
router.get('/', emergencyController_1.getEmergencies);
exports.default = router;
