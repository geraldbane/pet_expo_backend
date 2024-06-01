import { IsArray, IsOptional, IsString } from "class-validator";

export class UpdateDogDto{

    @IsOptional()
    @IsString()
    readonly name : string;

    @IsOptional()
    @IsString()
    readonly breed_group : string;

    @IsOptional()
    @IsString()
    readonly size : string;

    @IsOptional()
    @IsString()
    readonly lifespan : string;

    @IsOptional()
    @IsString()
    readonly origin : string;

    @IsOptional()
    @IsString()
    readonly temperament : string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true }) 
    readonly colors : string[];

    @IsOptional()
    @IsString()
    readonly description : string;
    }
    