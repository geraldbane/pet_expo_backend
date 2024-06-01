import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import mongoose from "mongoose"
import { Dog } from "../schemas/dog.schema"

@Injectable()
export class DogsService {
    constructor(
        @InjectModel(Dog.name)
        private dogModel:mongoose.Model<Dog>
    ){}

    async getAllDogs(): Promise<Dog[]>{
       const Dogs =await this.dogModel.find()
       return Dogs 
    }
    async create(dog: Dog) :Promise<Dog>{
        const res= await this.dogModel.create(dog)
        return res
    }
    async findById(id: string) :Promise<Dog>{
        const Dog= await this.dogModel.findById(id)
       if(!Dog){
        throw new  NotFoundException("Dog not found")
       }
        return Dog
    }
    async updateDog(id: string, dog: Dog) :Promise<Dog>{
        return await this.dogModel.findByIdAndUpdate(id,dog,{
           new:true,
           runValidators:true,
        })
    }
    async deleteDog(id: string) :Promise<Dog>{
        return await this.dogModel.findByIdAndDelete(id
    )
    }
    async findByName(name: string): Promise<Dog[]> {
        const birds = await this.dogModel.find({ name: { $regex: new RegExp(name, "i") } });
        return birds;
    }


}