import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DogsService } from '../services/dog.service';
import { Dog } from '../schemas/dog.schema';
import { CreateDogDto } from '../dto/dogs/create-dog.dto';
import { UpdateDogDto } from '../dto/dogs/update-dog.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
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
  
  @Put(':id')
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
  @Post('upload')
@UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
        destination: './Images', 
        filename: (_req, file, callback) => {
            const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
            callback(null, `${randomName}${extname(file.originalname)}`);
        },
    }),
}))
async uploadImage(@UploadedFile() image): Promise<{ imagePath: string }> {
    if (!image) {
        return { imagePath: null };
    }
    return { imagePath: `../Images/${image.filename}` };
}
  }
  