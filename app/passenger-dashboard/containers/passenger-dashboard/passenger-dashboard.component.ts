import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {

  constructor() { }

  passengers: Passenger[];
  name: string = '';

  handleChange(value: string) {
    this.name = value;
  };

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  ngOnInit() {
    this.passengers = [{
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

}