import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.fuels=this.ages
  }

  ngOnInit(): void {
  }
  onKey(event: any){
    this.fuels=this.ages.filter(age => {
      let isValid = true;
        isValid= age.toLowerCase().includes(event.target.value.toLowerCase());
      return isValid;
    });
    return this.fuels;
  }
  station(fuel: string){
    this.age=fuel;
  }
}

