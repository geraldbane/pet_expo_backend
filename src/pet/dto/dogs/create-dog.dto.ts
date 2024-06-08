import {  IsNotEmpty, IsString } from "class-validator";
export class CreateDogDto{

@IsNotEmpty()
@IsString()
readonly name : string;

@IsNotEmpty()
@IsString()
readonly image : string;


@IsNotEmpty()
@IsString()
readonly breed_group : string;

@IsNotEmpty()
@IsString()
readonly size : string;

@IsNotEmpty()
@IsString()
readonly lifespan : string;

@IsNotEmpty()
@IsString()
readonly origin : string;

@IsNotEmpty()
@IsString()
readonly temperament : string;

@IsNotEmpty()
@IsString({ each: true }) 
readonly colors : string[];

@IsNotEmpty()
@IsString()
readonly description : string;
}
