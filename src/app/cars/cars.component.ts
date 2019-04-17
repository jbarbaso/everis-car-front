import { Component, PipeTransform  } from '@angular/core';
import {Car} from './entities/car';
import {Cars} from '../../mock-cars';

import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

function search(text: string, pipe: PipeTransform): Car[] {
  return Cars.filter(car => {
    const term = text.toLowerCase();
    return car.brand.toLowerCase().includes(term)
      || pipe.transform(car.id).includes(term)
      || car.registration.toLowerCase().includes(term)
      || car.country.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent {

  public cars: Observable<Car[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.cars = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

}
