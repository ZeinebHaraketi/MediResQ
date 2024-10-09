"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User")); // Votre modèle utilisateur
const registerUser = (name, email, phone, role, password) => __awaiter(void 0, void 0, void 0, function* () {
    // Vérifier si l'utilisateur existe déjà
    let user = yield User_1.default.findOne({ email });
    if (user) {
        throw new Error('Utilisateur déjà existant');
    }
    // Hacher le mot de passe
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    // Créer un nouvel utilisateur
    user = new User_1.default({
        name,
        email,
        phone,
        role,
        password: hashedPassword,
    });
    yield user.save();
    // Générer un token JWT
    const token = jsonwebtoken_1.default.sign({ id: user.id }, 'votre_secret_jwt', { expiresIn: '1h' });
    return token;
});
exports.registerUser = registerUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    // Trouver l'utilisateur par email
    let user = yield User_1.default.findOne({ email });
    if (!user) {
        throw new Error('Identifiants invalides');
    }
    // Vérifier le mot de passe
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Identifiants invalides');
    }
    // Générer un token JWT
    const token = jsonwebtoken_1.default.sign({ id: user.id }, 'votre_secret_jwt', { expiresIn: '1h' });
    return token;
});
exports.loginUser = loginUser;
