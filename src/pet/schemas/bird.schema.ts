import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BirdDocument = Bird & Document;

@Schema()
export class Bird {
  @Prop()
  name: string;

  @Prop()
  image:string;

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
  weight_kg: string;

  @Prop()
  height_cm: string;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
