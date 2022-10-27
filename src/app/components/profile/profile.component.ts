import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Phone} from "../../interfaces/number";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
expert!: User;
phone!: Phone;

  horizontalPosition:MatSnackBarHorizontalPosition
  verticalPosition:MatSnackBarVerticalPosition

  constructor(private router: Router, private userservice: UserService,
              private snackBar:MatSnackBar,) {
    console.log(this.router.getCurrentNavigation().extras.state['example']);
    //this.expert=this.router.getCurrentNavigation().extras.state['example'];
  }

  ngOnInit(): void {

  }

  sendsms(){
    this.phone={
       phonenumber:this.expert.phone
      //phonenumber:"+254701020901"
    }
    console.log(this.phone);
    this.userservice.sendsms(this.phone).subscribe(
      (data) => {
        // this.router.navigate(['success'], {
        //   state: {
        //     message: data.message,
        //   },
        // });

        this.snackBar.open("Request Successful, You shall be Contacted", "X", {
          horizontalPosition:this.horizontalPosition,
          verticalPosition:this.verticalPosition,
          duration:5000,
          panelClass:(['green-snackbar', 'login-snackbar'])
        });
        this.router.navigate(['/']);

        console.log(data);
      },
      (error) => {
        // this.router.navigate(['failure'], {
        //   state: {
        //     message: error.error.message,
        //   },
        // });

        console.log(error);
      }
    );
  }

}
