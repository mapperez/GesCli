import { Component } from '@angular/core';
import { SettingService } from './servicios/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor( public seting: SettingService){

  }

}
