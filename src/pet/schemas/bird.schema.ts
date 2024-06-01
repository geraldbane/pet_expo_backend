import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BirdDocument = Bird & Document;

@Schema()
export class Bird {
  @Prop()
  name: string;

  @Prop()
  species: string;

  @Prop()
  family: string;

  @Prop()
  habitat: string;

  @Prop()
  place_of_found: string;

  @Prop()
  diet: string;

  @Prop()
  description: string;

  @Prop()
  weight_kg: number;

  @Prop()
  height_cm: number;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
