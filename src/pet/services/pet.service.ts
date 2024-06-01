
import { Observable, catchError, map } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios/dist/http.service';
import {  Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PetService {
  
  private readonly logger = new Logger(PetService.name);
  constructor(private  httpService: HttpService) {}

  getDogs(): Observable<any> {
    return this.httpService.get('https://freetestapi.com/api/v1/dogs').pipe(
      map((response: AxiosResponse<any>) => {
        const data = response.data;
        return data.map((dog: any) => ({
          id: dog.id,
          name: dog.name,
          breed_group: dog.breed_group,
          size: dog.size,
          lifespan: dog.lifespan,
          origin: dog.origin,
          temperament: dog.temperament,
          colors: dog.colors,
          description: dog.description,
          image: dog.image,
        }));
      }),
      catchError((error: AxiosError) => {
        this.logger.error('Error occurred while fetching dogs:', error);
        throw 'An error happened!';
      }),
    );
  }
 
  getCats(): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://freetestapi.com/api/v1/cats').pipe(
      map((response) => {
        const data = response.data;
        return data.map((cat: any) => ({
          id: cat.id,
          name: cat.name,
          origin: cat.origin,
          temperament: cat.temperament,
          colors: cat.colors,
          description: cat.description,
          image: cat.image,
        }));
      }),
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
      }),
    );
  }
  
  getBirds(): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://freetestapi.com/api/v1/birds').pipe(
      map((response) => {
        const data = response.data;
        return data.map((bird: any) => ({
          id: bird.id,
          name: bird.name,
          species: bird.species,
          family: bird.family,
          habitat: bird.habitat,
          place_of_found: bird.place_of_found,
          diet: bird.diet,
          description: bird.description,
          weight_kg: bird.weight_kg,
          image: bird.image,
        }));
      }),
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
      }),
    );
  }
}
