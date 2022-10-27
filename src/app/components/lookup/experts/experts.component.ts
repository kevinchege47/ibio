import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserService} from "../../../services/user.service";
import {User} from "../../../interfaces/user";
import {Router} from "@angular/router";


// export interface Account {
//   code?: string;
//   description?: string;
// }
//
// const accounts: Account[] = [
//   {code: "A001", description: 'TEST1', },
//   {code: "A002", description: 'TEST2', },
//   {code: "A003", description: 'TEST3', },
//   {code: "A004", description: 'TEST4', },
//   {code: "A005", description: 'TEST5', },
// ];

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Location'];
  // dataSource = branches;
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialogRef: MatDialogRef<ExpertsComponent>,
              private userService: UserService, private router: Router) {

    this.userService.retrieveAllExperts().subscribe(
      (data) => {
        //this.isLoadingResults = false;
        console.log(data)
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      (error) => {}
    );
    // this.dataSource = new MatTableDataSource(accounts);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSelect(data:any){

    this.router.navigate(['profile'], { state: { example: data } });
    this.dialogRef.close({ event: 'close', data:data });
  }

}
