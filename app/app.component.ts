import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null,
  children?: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  name: string = '';
  handleChange(value: string) {
    this.name = value;
  };
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
  }, {
    id: 2,
    fullname: 'Linda',
    checkedIn: false,
    checkedInDate: null,
    children: null
  }, {
    id: 3,
    fullname: 'Louise',
    checkedIn: false,
    checkedInDate: null,
    children: null
  }, {
    id: 4,
    fullname: 'Angie',
    checkedIn: true,
    checkedInDate: 1491606000000,
    children: [{ name: 'Jessica', age: 1 }]
  }];
}
