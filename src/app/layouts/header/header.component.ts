import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {SharedService} from '../../shared/shared.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    faGithub = faGithub;
    localTemperature: string = '';

    constructor(private _sharedSvc: SharedService) {
      this._sharedSvc.changeWeatherEmitted$.subscribe(temperature => {
        this.localTemperature = `${temperature} °F`;
      });
    }

    ngOnInit(): void {
    }

}
