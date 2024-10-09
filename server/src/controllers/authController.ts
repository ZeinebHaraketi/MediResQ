import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const { name, email, phone, role, password } = req.body;

  try {
    const token = await registerUser(name, email, phone, role, password);
    res.status(201).json({ token });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
