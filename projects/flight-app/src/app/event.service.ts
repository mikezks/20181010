import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private selectedFlightCountSubject$ = new BehaviorSubject<number>(0);
  selectedFlightCount$ = this.selectedFlightCountSubject$.asObservable();

  constructor() { }

  setSelectedFlightCount(flightCount: number): void {
    this.selectedFlightCountSubject$.next(flightCount);
  }
}
