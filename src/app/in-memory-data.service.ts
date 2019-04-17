import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './cars/entities/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars: Car[] = [
      {
        id: 13,
        brand: 'BMW',
        registration: new Date(),
        country: 'Spain'
      },
      {
        id: 14,
        brand: 'BMW',
        registration: new Date(),
        country: 'Germany'
      },
      {
        id: 18,
        brand: 'BMW',
        registration: new Date(),
        country: 'England'
      },
      {
        id: 19,
        brand: 'BMW',
        registration: new Date(),
        country: 'Spain'
      },
      {
        id: 20,
        brand: 'BMW',
        registration: new Date(),
        country: 'Germany'
      },
      {
        id: 23,
        brand: 'BMW',
        registration: new Date(),
        country: 'England'
      }
    ];
    return { cars };
  }

  // Overrides the genId method to ensure that a car always has an id.
  // If the cars array is empty,
  // the method below returns the initial number (13).
  // if the cars array is not empty, the method below returns the highest
  // car id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 13;
  }
}
