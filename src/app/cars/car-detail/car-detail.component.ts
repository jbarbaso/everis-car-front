import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../entities/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  @Input() public car: Car;

  constructor() {}

  ngOnInit() {}
}
