import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import mongoose from "mongoose"
import { Bird } from "../schemas/Bird.schema"

@Injectable()
export class BirdsService {
    constructor(
        @InjectModel(Bird.name)
        private birdModel:mongoose.Model<Bird>
    ){}

    async getAllBirds(): Promise<Bird[]>{
       const birds =await this.birdModel.find()
       return birds 
    }
    async create(bird: Bird) :Promise<Bird>{
        const res= await this.birdModel.create(bird)
        return res
    }
    async findById(id: string) :Promise<Bird>{
        const bird= await this.birdModel.findById(id)
       if(!bird){
        throw new  NotFoundException("Bird not found")
       }
        return bird
    }
    async updateBird(id: string, bird: Bird) :Promise<Bird>{
        return await this.birdModel.findByIdAndUpdate(id,bird,{
           new:true,
           runValidators:true,
        })
    }
    async deleteBird(id: string) :Promise<Bird>{
        return await this.birdModel.findByIdAndDelete(id
    )
    }

    async findByName(name: string): Promise<Bird[]> {
        const birds = await this.birdModel.find({ name: { $regex: new RegExp(name, "i") } });
        if(!birds){
            throw new  NotFoundException("Birds not found")
           }
        return birds;
    }


}