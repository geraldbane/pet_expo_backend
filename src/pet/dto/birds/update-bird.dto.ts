import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateBirdDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly species: string;

    @IsOptional()
    @IsString()
    readonly family: string;

    @IsOptional()
    @IsString()
    readonly habitat: string;

    @IsOptional()
    @IsString()
    readonly place_of_found: string;
    
    @IsOptional()
    @IsString()
    readonly diet: string;

    @IsOptional()
    @IsString()
    readonly description: string;
    
    @IsOptional()
    @IsNumber()
    readonly weight_kg: number;

    @IsOptional()
    @IsNumber()
   readonly height_cm: number;
  }