import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
    private emitWeatherSource = new Subject<string>();
    changeWeatherEmitted$ = this.emitWeatherSource.asObservable();
    emitWeatherChange(change: string) {
      this.emitWeatherSource.next(change);
    }
}