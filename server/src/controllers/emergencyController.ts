import { Request, Response } from 'express';
import * as emergencyService from '../services/emergencyService';

// Create a new emergency
export const createEmergency = async (req: Request, res: Response) => {
  try {
    const newEmergency = await emergencyService.createEmergency(req.body);
    res.status(201).json(newEmergency);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get all emergencies
export const getEmergencies = async (req: Request, res: Response) => {
  try {
    const emergencies = await emergencyService.getEmergencies();
    res.status(200).json(emergencies);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get emergency by ID
export const getEmergencyById = async (req: Request, res: Response) => {
  try {
    const emergency = await emergencyService.getEmergencyById(req.params.id);
    res.status(200).json(emergency);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update emergency by ID
export const updateEmergency = async (req: Request, res: Response) => {
  try {
    const emergency = await emergencyService.updateEmergency(req.params.id, req.body);
    res.status(200).json(emergency);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete emergency by ID
export const deleteEmergency = async (req: Request, res: Response) => {
  try {
    const message = await emergencyService.deleteEmergency(req.params.id);
    res.status(200).json(message);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
