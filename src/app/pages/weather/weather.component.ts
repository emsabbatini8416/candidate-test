import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private _sharedSvc: SharedService, private _weatherSvc: WeatherService) {
    this.getTemperature();
    setInterval(() => this.getTemperature, 1000 * 30);
   }

  ngOnInit(): void {
    
  }

  private getTemperature(){
    navigator.geolocation.getCurrentPosition((position) => {
      this._weatherSvc.getCurrentWeather(position.coords.latitude, position.coords.latitude).subscribe(res => {
        this._sharedSvc.emitWeatherChange(res.main.temp)
      });
    }, (err) => {
      console.error(err)
    });
  }

}
