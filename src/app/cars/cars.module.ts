import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

@NgModule({
  declarations: [
    CarsComponent,
    CarDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarsModule { }
