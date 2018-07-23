import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  templateUrl: 'passenger-detail.component.html'
})

export class PassengerDetailComponent implements OnChanges, OnInit {

  constructor() { }

  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter();

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit() {
  }

  editing: boolean = false;

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}