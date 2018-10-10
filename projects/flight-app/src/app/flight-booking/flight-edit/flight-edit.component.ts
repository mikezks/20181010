import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FlightService} from '../flight-search/flight.service';
import {map, delay} from 'rxjs/operators';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  id: string;
  showDetails: string;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private flightService: FlightService) { }

  ngOnInit() {
    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
      }
    );

    this.editForm = this.fb.group({
      id:   [1],
      from: ['Graz', [], [this.validate]],
      to:   ['Hamburg'],
      date: []
    });

    this.editForm.valueChanges.subscribe(v => {
      console.log('changes', v);
    });
  }

  save(): void {
    console.log(this.editForm.value);
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('touched', this.editForm.touched);
    console.log('dirty', this.editForm.dirty);
  }

  validate = (control: AbstractControl): Observable<any> => {
    return this
      .flightService
      .find(control.value, '') // exists
      .pipe(
        map(flights => {
          if (flights.length > 0) {
            return {};
          } else {
            return { asyncCity: true };
          }
        }),
        delay(4000)
      );
  }
}
