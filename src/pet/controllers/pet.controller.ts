
import { Controller, Get } from '@nestjs/common';
import { PetService } from '../services/pet.service';


@Controller('pets')
export class PetController {
  constructor(private readonly externalApiService: PetService) {}

  @Get('dogs')
  getDogsFromExternalApi() {
    return this.externalApiService.getDogs();
  }

  @Get('cats')
  getCatsFromExternalApi() {
    return this.externalApiService.getCats();
  }

  @Get('birds')
  getBirdsFromExternalApi() {
    return this.externalApiService.getBirds();
  }
}
