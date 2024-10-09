import mongoose, { Schema, Document } from 'mongoose';

export interface IAmbulance extends Document {
  numberPlate: string; // Numéro d'immatriculation
  location: {
    latitude: number;
    longitude: number;
  };
  status: 'available' | 'busy'; // Disponibilité de l'ambulance
}

const AmbulanceSchema: Schema = new Schema({
  numberPlate: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  status: { type: String, enum: ['available', 'busy'], default: 'available' }
});

export default mongoose.model<IAmbulance>('Ambulance', AmbulanceSchema);
