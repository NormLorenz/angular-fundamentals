import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: Http) { }

  getPassengers(): Promise<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassenger(id: number): Promise<Passenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(passenger: Passenger): Promise<Passenger> {

    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removePassenger(passenger: Passenger): Promise<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}