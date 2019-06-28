import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contactos Agenda Unitec';
  public header_color;

  constructor(){
  	this.header_color = GLOBAL.header_color;
  }

}
