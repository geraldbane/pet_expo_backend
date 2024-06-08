import {  IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateDogDto{

    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly name : string;
    
    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly image : string;


    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly breed_group : string;

    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly size : string;

    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly lifespan : string;

    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly origin : string;

    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly temperament : string;

    @IsOptional()
    @IsString({ each: true }) 
    readonly colors : string[];

    @IsOptional()
    @IsString()
  @IsNotEmpty()
    readonly description : string;
    }
    