import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CatsService } from '../services/cat.service';
import { Cat } from '../schemas/cat.schema';
import { CreateCatDto } from '../dto/cats/create-cat.dto';
import { UpdateCatDto } from '../dto/cats/update-cat.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller('cats')
export class CatController {
   constructor(private catsService : CatsService){}
@Get()
async getAllCats() : Promise<Cat[]>{
    return this.catsService.getAllCats()
}
@Post()
async createCat(
    @Body() cat : CreateCatDto
): Promise<Cat>{
    return this.catsService.create(cat)

}
@Get(':id')
async findCat(
    @Param('id')
    id:string
) : Promise<Cat>{
    return this.catsService.findById(id)
}

@Put(':id')
  async updateCat(
      @Param('id') id: string,
      @Body() catData: UpdateCatDto,
      @UploadedFile() image
  ): Promise<Cat> {
      const cat = await this.catsService.findById(id);
      if (!cat) {
          throw new NotFoundException('Cat not found');
      }

      
      if (cat.image) {
          const oldImagePath = cat.image.substring(3); 
          if (fs.existsSync(oldImagePath)) {
              fs.unlinkSync(oldImagePath);
          }
      }

      const updatedCatData = { ...catData };
      if (image) {
          updatedCatData.image = `../Images/${image.filename}`;
      }

      return this.catsService.updateCat(id, updatedCatData);
  }

@Delete(':id')
async deleteCat(
    @Param('id')
    id:string,
) : Promise<Cat>{
    const catToDelete = await this.catsService.findById(id);
      if (!catToDelete) {
          throw new NotFoundException('Cat not found');
      }

      if (catToDelete.image) {
          const imagePath = catToDelete.image.substring(3);
          if (fs.existsSync(imagePath)) {
              fs.unlinkSync(imagePath); 
          }
      }
    return this.catsService.deleteCat(id)
}
@Get("search/:name")
async searchCatByName(@Param("name") name: string): Promise<Cat[]> {
    return this.catsService.findByName(name);
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


