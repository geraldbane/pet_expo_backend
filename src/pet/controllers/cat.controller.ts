import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from '../services/cat.service';
import { Cat } from '../schemas/cat.schema';
import { CreateCatDto } from '../dto/cats/create-cat.dto';
import { UpdateCatDto } from '../dto/cats/update-cat.dto';


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

@Put()
async updateCat(
    @Param('id')
    id:string,
    @Body()
     cat : UpdateCatDto
): Promise<Cat>{
    return this.catsService.updateCat(id,cat)

}

@Delete(':id')
async deleteCat(
    @Param('id')
    id:string,
) : Promise<Cat>{
    return this.catsService.deleteCat(id)
}
@Get("search/:name")
async searchBirdByName(@Param("name") name: string): Promise<Cat[]> {
    return this.catsService.findByName(name);
}
}
