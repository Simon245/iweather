import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url: string = `http://api.weatherapi.com/v1/current.json?key=${environment.apiKey}`;
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    if (!environment.production) {
      // @ts-ignore
      const weather: any = JSON.parse(localStorage.getItem('weather'));
      return of(weather);
    } else {
      return this.http.get(`${this.url}&q=${city}`).pipe(map((res) => res));
    }
  }
}
