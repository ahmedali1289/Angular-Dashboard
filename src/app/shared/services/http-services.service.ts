import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { LoaderService } from './loader.service';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// @Injectable({
//   providedIn: 'root',
// })
export class HttpServicesService {

  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    ) {}
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  get headerToken() {
    const token = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      }),
    };
  }
  post(url: string, data: any, token: boolean) {
    return this.http
      .post(
        environment.baseUrl + url,
        data,
        token ? this.headerToken : this.header
      )
      
  }
  loaderPost(link: string, data: any, token: boolean) {
    LoaderService.loader.next(true);
    return this.http
      .post(
        environment.baseUrl + link,
        data,
        token ? this.headerToken : this.header
      )
      .pipe(catchError(this.handleError));
  }
  get(url: string, token: boolean) { 
    return this.http
      .get(environment.baseUrl + url, token ? this.headerToken : this.header)
      
  }
  loaderGet(url: string, token: boolean) {
    LoaderService.loader.next(true);
    return this.http
      .get(environment.baseUrl + url, token ? this.headerToken : this.header)
      
  }
  handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      // this.authService.logout();
    } else {
      this.toaster.error(error.message);
    }
    return throwError(error.message || 'Server error');
  }
}


