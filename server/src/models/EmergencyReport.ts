import mongoose, { Schema, Document } from 'mongoose';

export interface IEmergencyReport extends Document {
  reportDate: Date;
  totalEmergencies: number;
  emergencyTypes: { [key: string]: number }; // Nombre d'urgences par type
  averageResponseTime: number;
}

const EmergencyReportSchema: Schema = new Schema({
  reportDate: { type: Date, default: Date.now },
  totalEmergencies: { type: Number, required: true },
  emergencyTypes: { type: Map, of: Number, required: true },
  averageResponseTime: { type: Number, required: true }
});

export default mongoose.model<IEmergencyReport>('EmergencyReport', EmergencyReportSchema);
