import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  public static logout: Subject<any> = new Subject<any>();
  public userData: any;
  public showLoader: boolean = false;
  constructor(
    public router: Router,
    public ngZone: NgZone,
    ) { 
  }
  ngOnInit(): void { }
  // sign in function
  SignIn(email:any, password:any) {
    console.log(email,password)
    this.router.navigate(['/dashboard/default']);
  }

  // main verification function
  // SendVerificationMail() {
  //   return this.afAuth.auth.currentUser.sendEmailVerification()
  //     .then(() => {
  //       this.router.navigate(['/dashboard/default']);
  //     })
  // }

  // Sign in with Facebook
  // signInFacebok() {
  //   return this.AuthLogin(new auth.FacebookAuthProvider());
  // }

  // Sign in with Twitter
  // signInTwitter() {
  //   return this.AuthLogin(new auth.TwitterAuthProvider());
  // }

  // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // ForgotPassword(passwordResetEmail) {
  //   return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  //     .then(() => {
  //       window.alert('Password reset email sent, check your inbox.');
  //     }).catch((error) => {
  //       window.alert(error);
  //     });
  // }

  // Authentication for Login
  // AuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //     .then((result) => {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['/dashboard/default']);
  //       });
  //       this.SetUserData(result.user);
  //     }).catch((error) => {
  //       window.alert(error);
  //     });
  // }

  // Set user
  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData: User = {
  //     email: user.email,
  //     displayName: user.displayName,
  //     uid: user.uid,
  //     photoURL: user.photoURL || 'assets/dashboeard/boy-2.png',
  //     emailVerified: user.emailVerified
  //   };
  //   userRef.delete().then(function () {})
  //         .catch(function (error) {});
  //   return userRef.set(userData, {
  //     merge: true
  //   });
  // }

  // Sign out
  // SignOut() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  //   };
  //   return this.afAuth.auth.signOut().then(() => {
  //     this.showLoader = false;
  //     localStorage.clear();
  //     this.cookieService.deleteAll('user', '/auth/login');
  //     this.router.navigate(['/auth/login']);
  //   });
  // }

  get isLoggedIn(): boolean {
    console.log('here1');
    console.log('here');
    
    const user = localStorage.getItem('user');
    return (user != null) ? true : false;
  }

}