import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/firebase/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  constructor(public authService: AuthService, private toastr: ToastrService,) { }
  ngOnInit() {
  }
  logoutUser(){
    //clear local storage
    localStorage.clear();
    this.toastr.success('successfully logged Out!');
}
}
