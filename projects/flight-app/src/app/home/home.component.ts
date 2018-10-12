import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromState from '../+state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<fromState.State>) { }

  ngOnInit() {
    this.count$ = this.store.pipe(select(fromState.getCount));
  }

  countUp() {
    this.store.dispatch(new fromState.IncreaseByAction(15));
  }

}
