import mongoose from 'mongoose';
import User from '../models/User';

// Create a new user
export const createUser = async (userData: any) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get user by ID
export const getUserById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid user ID');
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Update user by ID
export const updateUser = async (id: string, updateData: any) => {
  try {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Delete user by ID
export const deleteUser = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error('User not found');
    }
    return { message: 'User deleted successfully' };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
