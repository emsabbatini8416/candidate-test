import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
    private URI: string = '';
    private apiKey: string = '354b4e751f41872ac5ee002579748a47';

    constructor(private http: HttpClient) {
        this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=imperial`;
    }

    getCurrentWeather(lat: any, lon: any): Observable<any> {
        return this.http.get(`${this.URI}&lat=${lat}&lon=${lon}`);
    }
}