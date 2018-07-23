import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];
  name: string = '';

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .then((data: Passenger[]) => this.passengers = data);
  }

  handleChange(value: string) {
    this.name = value;
  };

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .then((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .then((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}