import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  user: string; // Référence à l'utilisateur (le patient)
  name: string; // Nom du contact
  phone: string; // Téléphone du contact
  relation: string; // Relation avec l'utilisateur (parent, ami, etc.)
}

const ContactSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  relation: { type: String, required: true }
});

export default mongoose.model<IContact>('EmergencyContact', ContactSchema);
