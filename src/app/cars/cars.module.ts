import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CarsComponent,
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    CarsComponent,
    CarDetailComponent
  ]
})
export class CarsModule { }
