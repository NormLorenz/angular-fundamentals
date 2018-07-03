import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  title: string;
  name: string = 'norm';
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  logo: string = 'img/logo.svg';
  constructor() {
    this.title = 'ultimate angular';
  }
}
