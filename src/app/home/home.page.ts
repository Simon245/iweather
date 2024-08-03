import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getWeather('Schlusselfeld')
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
