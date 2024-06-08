import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateBirdDto {
  @IsString()

  @IsOptional()
  name: string;

  @IsString()
 
  @IsOptional()
  description: string;

  @IsString()
 
  @IsOptional()
  image: string;

  @IsString()
 
  @IsOptional()
  species: string;

  @IsString()
 
  @IsOptional()
  family: string;

  @IsString()
 
  @IsOptional()
  habitat: string;

  @IsString()
 
  @IsOptional()
  place_of_found: string;

  @IsString()
 
  @IsOptional()
  diet: string;

  @IsString()
 
  @IsOptional()
  weight_kg: string;

  @IsString()
 
  @IsOptional()
  height_cm: string;
}
