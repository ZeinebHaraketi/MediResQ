import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface INotification extends Document {
  user: IUser; // L'utilisateur qui reçoit la notification
  message: string; // Contenu de la notification
  read: boolean; // Statut de lecture
  createdAt: Date; // Date de création
}

const NotificationSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<INotification>('Notification', NotificationSchema);
