import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  role: 'patient' | 'medical_staff';
  password: string;
  medicalInfo?: {
    bloodType: string;
    allergies: string[];
    medicalHistory: string[];
  };
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['patient', 'medical_staff'], required: true },
  password: { type: String, required: true },  // Ajout du mot de passe
  medicalInfo: {
    bloodType: { type: String },
    allergies: { type: [String] },
    medicalHistory: { type: [String] },
  },
});

export default mongoose.model<IUser>('User', UserSchema);
