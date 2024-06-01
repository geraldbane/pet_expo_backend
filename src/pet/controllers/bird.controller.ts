import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BirdsService } from '../services/bird.service';
import { Bird } from '../schemas/Bird.schema';
import { CreateBirdDto } from '../dto/birds/create-bird.dto';
import { UpdateBirdDto } from '../dto/birds/update-bird.dto';

@Controller('birds')
export class BirdController {
  constructor(private birdsService : BirdsService){}
  @Get()
  async getAllBirds() : Promise<Bird[]>{
      return this.birdsService.getAllBirds()
  }
  @Post()
  async createBird(
      @Body() bird : CreateBirdDto
  ): Promise<Bird>{
      return this.birdsService.create(bird)
  
  }
  @Get(':id')
  async findBird(
      @Param('id')
      id:string
  ) : Promise<Bird>{
      return this.birdsService.findById(id)
  }
  
  @Put()
  async updateBird(
      @Param('id')
      id:string,
      @Body()
      bird : UpdateBirdDto
  ): Promise<Bird>{
      return this.birdsService.updateBird(id,bird)
  
  }
  
  @Delete(':id')
  async deleteBird(
      @Param('id')
      id:string,
  ) : Promise<Bird>{
      return this.birdsService.deleteBird(id)
  }
  @Get("search/:name")
  async searchBirdByName(@Param("name") name: string): Promise<Bird[]> {
      return this.birdsService.findByName(name);
  }
  
}