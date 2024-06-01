import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import { Cat } from '../schemas/cat.schema';

@Injectable()
export class CatsService {
    constructor(
        @InjectModel(Cat.name)
        private catModel:mongoose.Model<Cat>
    ){}

    async getAllCats(): Promise<Cat[]>{
       const cats =await this.catModel.find()
       return cats 
    }
    async create(cat: Cat) :Promise<Cat>{
        const res= await this.catModel.create(cat)
        return res
    }
    async findById(id: string) :Promise<Cat>{
        const cat= await this.catModel.findById(id)
       if(!cat){
        throw new  NotFoundException("Cat not found")
       }
        return cat
    }
    async updateCat(id: string, cat: Cat) :Promise<Cat>{
        return await this.catModel.findByIdAndUpdate(id,cat,{
           new:true,
           runValidators:true,
        })
    }
    async deleteCat(id: string) :Promise<Cat>{
        return await this.catModel.findByIdAndDelete(id
    )
    }
    async findByName(name: string): Promise<Cat[]> {
        const birds = await this.catModel.find({ name: { $regex: new RegExp(name, "i") } });
        return birds;
    }

}