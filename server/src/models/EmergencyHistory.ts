import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IEmergency } from './Emergency';

export interface IEmergencyHistory extends Document {
  user: IUser; // Référence à l'utilisateur
  emergencies: IEmergency[]; // Liste des urgences passées
}

const EmergencyHistorySchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  emergencies: [{ type: Schema.Types.ObjectId, ref: 'Emergency' }]
});

export default mongoose.model<IEmergencyHistory>('EmergencyHistory', EmergencyHistorySchema);
