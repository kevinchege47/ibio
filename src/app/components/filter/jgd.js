import { Component, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  ages: string[] = [
    "Ola Kiambu", "Ola Waiyaki",
    "Ola Kikuyu", "Hass Kinoo",
    "Total kiambu","Total Ridgeways",
    "Total Ruaka", "Shell Limuru"];

    value: string;
    valueChanged: Subject<string> = new Subject<string>();
    inputSub: Subscription;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.inputSub = this.valueChanged
      .pipe(debounceTime(5000))
      .subscribe(value => {
        this.value = value
        console.log(value)
      });
  }

  onChangeInput(text: string) {
    this.valueChanged.next(text);
  }

  ngOnDestroy() {
    this.inputSub.unsubscribe();
  }


}