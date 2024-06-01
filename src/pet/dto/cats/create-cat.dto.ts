import { IsNotEmpty, IsString, IsArray } from "class-validator";

export class CreateCatDto {
   @IsNotEmpty()
   @IsString()
   readonly name: string;
 
   @IsNotEmpty()
   @IsString()
   readonly origin: string;

   @IsNotEmpty()
   @IsString()
   readonly temperament: string;
   
  @IsNotEmpty()
   @IsArray()
   @IsString({ each: true }) 
   readonly colors: string[];
 
   @IsNotEmpty()
   @IsString()
   readonly description: string;
 }