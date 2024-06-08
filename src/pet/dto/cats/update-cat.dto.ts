import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCatDto {
   @IsOptional()
  @IsString()
  @IsNotEmpty()
   readonly name: string;
   
   @IsOptional()
  @IsString()
  @IsNotEmpty()
   readonly image: string;
 
   @IsOptional()
  @IsString()
  @IsNotEmpty()
   readonly origin: string;

   @IsOptional()
  @IsString()
  @IsNotEmpty()
   readonly temperament: string;
   
  @IsOptional()
   @IsString({ each: true }) 
   readonly colors: string[];
 
   @IsOptional()
  @IsString()
  @IsNotEmpty()
   readonly description: string;
 }