import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBirdDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly species: string;

  @IsNotEmpty()
  @IsString()
  readonly family: string;

  @IsNotEmpty()
  @IsString()
  readonly habitat: string;

  @IsNotEmpty()
  @IsString()
  readonly place_of_found: string;

  @IsNotEmpty()
  @IsString()
  readonly diet: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly weight_kg: number;

  @IsNotEmpty()
  @IsString()
 readonly height_cm: number;
}
