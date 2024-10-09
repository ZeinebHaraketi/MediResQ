import mongoose, { Schema, Document } from 'mongoose';

export interface IHospital extends Document {
  name: string;
  address: string;
  location: { latitude: number; longitude: number };
  capacity: number;
}

const HospitalSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  capacity: { type: Number, required: true }
});

export default mongoose.model<IHospital>('Hospital', HospitalSchema);
