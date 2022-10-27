import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

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
  age: string
  fuels: string[];

  fuel:string

  values: string[];
  valueChanged: Subject<string> = new Subject<string>();
  inputSub: Subscription;

  constructor() {
    // this.fuels=this.ages
  }

  ngOnInit(): void {
  }

  station(fuel: string){
    this.age=fuel;
  }

  ngAfterContentInit() {
    this.inputSub = this.valueChanged
      .pipe(debounceTime(1000))
      .subscribe(value => {
        if(value){

          this.values = this.ages.filter(age => {
            let isValid = true;
              isValid= age.toLowerCase().includes(value.toLowerCase());
            return isValid;
          });
          return this.fuels;

        }
return []
console.log(value)
      });
  }

  onChangeInput(text: string) {
    this.valueChanged.next(text);
    console.log(text)
  }

  ngOnDestroy() {
    this.inputSub.unsubscribe();
  }

}

