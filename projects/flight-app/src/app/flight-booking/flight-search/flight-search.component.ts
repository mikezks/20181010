import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { FlightService } from './flight.service';
import {EventService} from '../../event.service';
import {Observable} from 'rxjs';
import * as fromFlightBooking from '../+state';
import {select, Store} from '@ngrx/store';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  
  // flights: Array<Flight> = [];
  // {{ flights }}
  /*get flights() {
    return this.flightService.flights;
  }*/

  flights$: Observable<Flight[]>;


  basket: object = {
  };

  // private http: HttpClient;

  constructor(
    private flightService: FlightService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private eventService: EventService,
    private store: Store<fromFlightBooking.State>) {
    // this.http = http;
  }

  ngOnInit() {
    this.flights$ =
      this.store
        .pipe(
          select(fromFlightBooking.getFlights)
        );
  }

  search(): void {

    //this.flightService.load(this.from, this.to);

    /*this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => {
          this.store.dispatch(new fromFlightBooking.FlightsLoadedAction(flights));
        },
        error => {
          console.error('error', error);
        }
      );*/

    this.store.dispatch(
      new fromFlightBooking.FlightsLoadAction(
        this.from, this.to
      )
    );
  }

  select(f: Flight) {
  }

  selectedChange(f: Flight, selected: boolean): void {
    this.basket[f.id] = selected;

    const flightCount = Object.keys(this.basket)
      .map((key, index) => this.basket[key])
      .filter(value => value)
      .length;

    this.eventService.setSelectedFlightCount(flightCount);
  }

  delay(): void {
    this.flights$
      .pipe(
        take(1)
      )
      .subscribe(flights => {
          const flight = flights[0];

          const oldDate = new Date(flight.date);
          const newDate = new Date(oldDate.getTime() + 15 * 60 * 1000);
          const newFlight = { ...flight, date: newDate.toISOString() };

          this.store.dispatch(new fromFlightBooking.FlightUpdateAction(newFlight));
        }
      );
  }
}
