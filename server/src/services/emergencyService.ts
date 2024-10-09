import mongoose from 'mongoose';
import Emergency from '../models/Emergency';

// Create a new emergency
export const createEmergency = async (emergencyData: any) => {
  try {
    const newEmergency = await Emergency.create(emergencyData);
    return newEmergency;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get all emergencies
export const getEmergencies = async () => {
  try {
    const emergencies = await Emergency.find().populate('patient').populate('hospitalAssigned');
    return emergencies;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get emergency by ID
export const getEmergencyById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid emergency ID');
  }

  try {
    const emergency = await Emergency.findById(id).populate('patient').populate('hospitalAssigned');
    if (!emergency) {
      throw new Error('Emergency not found');
    }
    return emergency;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Update emergency by ID
export const updateEmergency = async (id: string, updateData: any) => {
  try {
    const emergency = await Emergency.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!emergency) {
      throw new Error('Emergency not found');
    }
    return emergency;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Delete emergency by ID
export const deleteEmergency = async (id: string) => {
  try {
    const emergency = await Emergency.findByIdAndDelete(id);
    if (!emergency) {
      throw new Error('Emergency not found');
    }
    return { message: 'Emergency deleted successfully' };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
