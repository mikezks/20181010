import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, interval, Observable, of, Subject, Subscription, timer} from 'rxjs';
import {debounceTime, delay, distinctUntilChanged, filter, map, startWith, switchMap, take, takeUntil, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Flight} from '../../entities/flight';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.scss']
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {
  // RxJS Demo
  sub: Subscription;
  destroySubject: Subject<boolean> = new Subject<boolean>();

  // Typeahead
  control = new FormControl();
  flights$: Observable<Flight[]>;
  loading: boolean;
  displayedColumns: string[] = ['id', 'from', 'to', 'date'];
  online: boolean;
  online$: Observable<boolean>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.rxjsDemo();
    this.typeahead();
  }

  typeahead(): void {
    this.online$ = interval(2000).pipe(
      startWith(0),
      map(x => Math.random() < 0.5),
      distinctUntilChanged(),
      tap(x => this.online = x)
    );

    this.flights$ =
      combineLatest(
        this.control
          .valueChanges
            .pipe(
              debounceTime(300),
              filter(value => value.length >= 3 )
            ),
        this.online$
      )
        .pipe(
          filter(combine => combine[1]),
          map(combine => combine[0]),
          distinctUntilChanged(),
          tap(
            () => this.loading = true
          ),
          switchMap(from => this.load(from)),
          tap(
            () => this.loading = false
          )
        );
  }

  rxjsDemo(): void {
    this.sub = timer(0,2000)
      .pipe(
        // take(4)
        takeUntil(this.destroySubject)
      )
      .subscribe(
        data => console.log(data)
      );

    const flightData = [
      {
        id: 1,
        from: 'Wien',
        to: 'Berlin'
      },
      {
        id: 2,
        from: 'Graz',
        to: 'Hamburg'
      }
    ];

    of(flightData)
      .pipe(
        map(flights =>
          flights.map(
            flight => flight.from
          ))
      )
      .subscribe(
        data => console.log(data)
      );
  }

  load(from: string):Observable<Flight[]>  {
    let url = "http://www.angular.at/api/flight";

    let params = new HttpParams()
      .set('from', from);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers})
      .pipe(
        delay(3000)
      );
  };

  ngOnDestroy(): void {
    this.destroySubject.next(true);
    //this.sub.unsubscribe();
  }
}
