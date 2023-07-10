import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/firebase/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  logoutUser(){

    //clear local storage
    localStorage.clear();

    //or
    //remove an key from local storage
    // localStorage.removeItem("your_key");

    //things that you want to do for logout


}
}
