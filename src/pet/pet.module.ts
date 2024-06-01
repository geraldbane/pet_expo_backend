import { Module } from '@nestjs/common';
import { CatController } from './controllers/cat.controller';
import { DogController } from './controllers/dog.controller';
import { BirdController } from './controllers/bird.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';
import { DogSchema } from './schemas/dog.schema';
import { BirdSchema } from './schemas/bird.schema';
import { CatsService } from './services/cat.service';
import { DogsService } from './services/dog.service';
import { BirdsService } from './services/bird.service';

import { PetController } from './controllers/pet.controller';
import { PetService } from './services/pet.service';
import { HttpModule } from '@nestjs/axios';



@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cat', schema: CatSchema },
      { name: 'Dog', schema: DogSchema },
      { name: 'Bird', schema: BirdSchema }
    ]),
HttpModule.register({
  timeout:5000,
  maxRedirects: 5,
})
  ],
  controllers: [CatController, DogController, BirdController,PetController],
  providers: [CatsService, DogsService, BirdsService,PetService]
})
export class PetModule {}
