import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Ensure you run 'npm install @nestjs/mongoose mongoose' first at the root!

@Schema({ 
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  collection: 'halls' // Explicitly names the MongoDB collection
})
export class HallBooking extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  capacity: number;

  @Prop([String])
  amenities: string[]; // e.g., ['AC', 'Parking', 'Dining']
  
  @Prop({ default: false })
  isBooked: boolean;
}

// Mongoose requires this export for the schema factory
export const HallSchema = SchemaFactory.createForClass(HallBooking);
