import { Component, OnInit } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {ExpertsComponent} from "../lookup/experts/experts.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  expertsLookup(): void {
    const cdialogRef = this.dialog.open(ExpertsComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      //this.repaymentAccount = result.data.code;
    });
  }
}
