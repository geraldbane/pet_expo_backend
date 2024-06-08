import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DogDocument = Dog & Document;

@Schema()
export class Dog {
  @Prop()
  name: string;

  @Prop()
  image:string;

  @Prop()
  breed_group: string;

  @Prop()
  size: string;

  @Prop()
  lifespan: string;

  @Prop()
  origin: string;

  @Prop()
  temperament: string;

  @Prop([String])
  colors: string[];

  @Prop()
  description: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
