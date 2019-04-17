import { Component, OnInit } from '@angular/core';

import { Car } from './entities/car';
import { CarService } from './car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  providers: [],
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  public cars: Observable<Car[]>;
  public selectedCar: Car;

  constructor(protected carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  getCars(): void {
    this.cars = this.carService.getCars();
  }

  // add(brand: string, registration: Date, country: string): void {
  //   brand = brand.trim();
  //   if (!brand || !registration || !country) { return; }
  //   this.carService.addCar({ brand, registration, country } as Car)
  //     .subscribe(car => { this.cars.push(car); });
  // }

  // delete(car: Car): void {
  //   this.cars = this.cars.filter(h => h !== car);
  //   this.carService.deleteCar(car).subscribe();
  // }

}
