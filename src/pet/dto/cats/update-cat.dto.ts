import { IsOptional, IsString, IsArray } from "class-validator";

export class UpdateCatDto {
   @IsOptional()
   @IsString()
   readonly name: string;
 
   @IsOptional()
   @IsString()
   readonly origin: string;

   @IsOptional()
   @IsString()
   readonly temperament: string;
   
  @IsOptional()
   @IsArray()
   @IsString({ each: true }) 
   readonly colors: string[];
 
   @IsOptional()
   @IsString()
   readonly description: string;
 }