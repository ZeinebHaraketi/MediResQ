import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User'; // Votre modèle utilisateur

export const registerUser = async (name: string, email: string, phone: string, role: string, password: string) => {
  // Vérifier si l'utilisateur existe déjà
  let user = await User.findOne({ email });
  if (user) {
    throw new Error('Utilisateur déjà existant');
  }

  // Hacher le mot de passe
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Créer un nouvel utilisateur
  user = new User({
    name,
    email,
    phone,
    role,
    password: hashedPassword,
  });

  await user.save();

  // Générer un token JWT
  const token = jwt.sign({ id: user.id }, 'votre_secret_jwt', { expiresIn: '1h' });

  return token;
};

export const loginUser = async (email: string, password: string) => {
  // Trouver l'utilisateur par email
  let user = await User.findOne({ email });
  if (!user) {
    throw new Error('Identifiants invalides');
  }

  // Vérifier le mot de passe
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Identifiants invalides');
  }

  // Générer un token JWT
  const token = jwt.sign({ id: user.id }, 'votre_secret_jwt', { expiresIn: '1h' });

  return token;
};
