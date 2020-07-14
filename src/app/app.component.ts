import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './carservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    cars1: Car[];

    cars2: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars1 = cars);
        this.carService.getCarsMedium().then(cars => this.cars2 = cars);

        this.cols = [
            { field: 'vin', header: 'Vin', width: '25%' },
            { field: 'year', header: 'Year', width: '15%' },
            { field: 'brand', header: 'Brand', width: '35%' },
            { field: 'color', header: 'Color', width: '25%' }
        ];
    }
}
