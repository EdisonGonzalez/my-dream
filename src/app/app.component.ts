import { ApiserviceService } from './services/apiservice.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  constructor( public ser: ApiserviceService) {
    setInterval(() => {
      console.log('app' + this.ser.name);
    }, 10000);
  }
}
