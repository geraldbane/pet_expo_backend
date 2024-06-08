import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BirdsService } from '../services/bird.service';
import { Bird } from '../schemas/Bird.schema';
import { CreateBirdDto } from '../dto/birds/create-bird.dto';
import { UpdateBirdDto } from '../dto/birds/update-bird.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller('birds')
export class BirdController {
  constructor(private birdsService: BirdsService) {}

  @Get()
  async getAllBirds(): Promise<Bird[]> {
    return this.birdsService.getAllBirds();
  }
  
  @Post()
  async createBird(@Body() birdData: CreateBirdDto): Promise<Bird> {
    return this.birdsService.create(birdData);
  }
  
  @Put(':id')
  async updateBird(
      @Param('id') id: string,
      @Body() birdData: UpdateBirdDto,
      @UploadedFile() image
  ): Promise<Bird> {
      const bird = await this.birdsService.findById(id);
      if (!bird) {
          throw new NotFoundException('Bird not found');
      }

      
      if (bird.image) {
          const oldImagePath = bird.image.substring(3); 
          if (fs.existsSync(oldImagePath)) {
              fs.unlinkSync(oldImagePath);
          }
      }

      const updatedBirdData = { ...birdData };
      if (image) {
          updatedBirdData.image = `../Images/${image.filename}`;
      }

      return this.birdsService.updateBird(id, updatedBirdData);
  }

  @Get(':id')
  async findBird(
      @Param('id') id: string
  ): Promise<Bird> {
      return this.birdsService.findById(id);
  }
  
  @Delete(':id')
  async deleteBird(
      @Param('id') id: string,
  ): Promise<Bird> {
      const birdToDelete = await this.birdsService.findById(id);
      if (!birdToDelete) {
          throw new NotFoundException('Bird not found');
      }

      if (birdToDelete.image) {
          const imagePath = birdToDelete.image.substring(3);
          if (fs.existsSync(imagePath)) {
              fs.unlinkSync(imagePath); 
          }
      }
      
      return this.birdsService.deleteBird(id);
  }

  @Get("search/:name")
  async searchBirdByName(@Param("name") name: string): Promise<Bird[]> {
      return this.birdsService.findByName(name);
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