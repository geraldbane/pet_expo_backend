import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DogsService } from '../services/dog.service';
import { Dog } from '../schemas/dog.schema';
import { CreateDogDto } from '../dto/dogs/create-dog.dto';
import { UpdateDogDto } from '../dto/dogs/update-dog.dto';

@Controller('dogs')
export class DogController {
  constructor(private dogsService : DogsService){}
  @Get()
  async getAllDogs() : Promise<Dog[]>{
      return this.dogsService.getAllDogs()
  }
  @Post()
  async createDog(
      @Body() dog : CreateDogDto
  ): Promise<Dog>{
      return this.dogsService.create(dog)
  
  }
  @Get(':id')
  async findDog(
      @Param('id')
      id:string
  ) : Promise<Dog>{
      return this.dogsService.findById(id)
  }
  
  @Put()
  async updateDog(
      @Param('id')
      id:string,
      @Body()
       dog : UpdateDogDto
  ): Promise<Dog>{
      return this.dogsService.updateDog(id,dog)
  
  }
  
  @Delete(':id')
  async deleteDog(
      @Param('id')
      id:string,
  ) : Promise<Dog>{
      return this.dogsService.deleteDog(id)
  }

  @Get("search/:name")
  async searchBirdByName(@Param("name") name: string): Promise<Dog[]> {
      return this.dogsService.findByName(name);
  }
  }
  