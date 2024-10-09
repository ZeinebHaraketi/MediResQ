import mongoose, { Schema, Document } from 'mongoose';
import { IHospital } from './Hospital';

export interface IHospitalAvailability extends Document {
  hospital: IHospital; // Référence à l'hôpital
  availableBeds: number; // Nombre de lits disponibles
  capacity: number; // Capacité totale de l'hôpital
}

const HospitalAvailabilitySchema: Schema = new Schema({
  hospital: { type: Schema.Types.ObjectId, ref: 'Hospital', required: true },
  availableBeds: { type: Number, required: true },
  capacity: { type: Number, required: true }
});

export default mongoose.model<IHospitalAvailability>('HospitalAvailability', HospitalAvailabilitySchema);
