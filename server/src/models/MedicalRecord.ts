import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface IMedicalRecord extends Document {
  user: IUser; // Lien vers l'utilisateur (patient)
  medicalHistory: string[]; // Historique médical
  prescriptions: string[]; // Ordonnances
  testResults: string[]; // Résultats des tests médicaux
}

const MedicalRecordSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  medicalHistory: [{ type: String }],
  prescriptions: [{ type: String }],
  testResults: [{ type: String }]
});

export default mongoose.model<IMedicalRecord>('MedicalRecord', MedicalRecordSchema);
