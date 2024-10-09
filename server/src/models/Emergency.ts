import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IHospital } from './Hospital';

export interface IEmergency extends Document {
  patient: IUser;
  emergencyType: 'accident' | 'cardiac_arrest' | 'injury';
  status: 'reported' | 'in_progress' | 'resolved';
  location: { latitude: number; longitude: number };
  hospitalAssigned?: IHospital;
}

const EmergencySchema: Schema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  emergencyType: { type: String, enum: ['accident', 'cardiac_arrest', 'injury'], required: true },
  status: { type: String, enum: ['reported', 'in_progress', 'resolved'], default: 'reported' },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  hospitalAssigned: { type: Schema.Types.ObjectId, ref: 'Hospital' }
});

export default mongoose.model<IEmergency>('Emergency', EmergencySchema);
