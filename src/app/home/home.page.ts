import { Component } from '@angular/core';
import { Weather } from 'src/app/models/Weather';
import { WeatherLocation } from 'src/app/models/WeatherLocation';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  currentLocation: string = '';
  weather = {} as Weather;
  weatherLocation = {} as WeatherLocation;
  constructor(private weatherService: WeatherService) {}

  ionViewWillEnter() {
    this.currentLocation = 'Germany';
    this.weatherService
      .getWeather(this.currentLocation)
      .subscribe((response: any) => {
        console.log(response);
        this.weather = response.current;
        this.weatherLocation = response.location;
      });
  }

  getIconUrl(): string {
    return `https:${this.weather.condition.icon}`;
  }

  isEmptyObject(obj: {}): boolean {
    return obj && Object.keys(obj).length === 0;
  }
}
