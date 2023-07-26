import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/firebase/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpServicesService } from '../../shared/services/http-services.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;

  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router,
    private toastr: ToastrService,
    private http: HttpServicesService

  ) {
    this.loginForm = this.fb.group({
      email: ['Denver@gmail.com', [Validators.required, Validators.email]],
      password: ['admin321@', Validators.required]
    });
    // this.http.post('login', this.loginForm, false).subscribe((res: any) => {
    //   console.log(res, 'response')
    //   console.log(res?.token)
    //   localStorage.setItem('access_token', res?.token);
    //   this.router.navigate(['/dashboard/default']);
    // });
    // this.http.post('login', this.loginForm, false).subscribe((res: any) => {
    //   console.log(res?.token, 'token');
    //   if (res?.token) {
    //     localStorage.setItem('access_token', res?.token);
    //     this.router.navigate(['/dashboard/default']);
    //   }
    //   (error: any) => {
    //     console.error('Error:', error);
    //     // Handle the error, display a toast message, etc.
    //     this.toastr.error('Login failed. Please try again.');
    //   }

    // });
  }
  ngOnInit() {
    console.log('hii');

  }

  showPassword() {
    this.show = !this.show;
  }
  // Simple Login
  // login() {
  //   console.log(this.loginForm.value);

  //   let email1 = this.loginForm.value['email']
  //   let pass = this.loginForm.value['password'] 
  //   localStorage.setItem('user', this.loginForm.value['email'])
  //   this.authService.SignIn(email1, pass);
  //   this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password'])
  //   this.toastr.success('successfully logged in!');
  // }
  login() {
    console.log(this.loginForm.value);

    let email1 = this.loginForm.value.email;
    let pass = this.loginForm.value.password;

    //  call the login API with the form data
    this.http.post('/auth/login', { email: email1, password: pass }, false).subscribe(
      (res: any) => {
        if (res?.token) {
          localStorage.setItem('access_token', res?.token);
          console.log(res?.token, 'token',);
          this.router.navigate(['/dashboard/default']);
        }
      },
      (error: any) => {
        console.error('Error:', error);
        this.toastr.error('Login failed. Please try again.');
      }
    );
  }
}

