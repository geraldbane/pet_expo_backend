import { IsNotEmpty, IsString, } from "class-validator";

export class CreateCatDto {
   @IsNotEmpty()
   @IsString()
   readonly name: string;

   @IsNotEmpty()
   @IsString()
   readonly image: string;
 
   @IsNotEmpty()
   @IsString()
   readonly origin: string;

   @IsNotEmpty()
   @IsString()
   readonly temperament: string;
   
  @IsNotEmpty()
   @IsString({ each: true }) 
   readonly colors: string[];
 
   @IsNotEmpty()
   @IsString()
   readonly description: string;
 }