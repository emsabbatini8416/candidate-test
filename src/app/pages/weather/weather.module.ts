import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';

import { WeatherService } from './weather.service';


@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService]
})
export class WeatherModule { }
