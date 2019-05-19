import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Loading } from '../type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    URL = 'http://localhost:3000/';

    constructor(private http: HttpClient, private router: Router, private store: Store<Loading>) { }

    async signUp(email: string, name: string, password: string): Promise<any> {
        return this.http.post(`${this.URL}user/signup`, {email, password, name})
        .toPromise()
        .then(res => res)
        .catch(err => err);
    }
    async login(email: string, password: string) {
      return this.http.post(`${this.URL}user/signin`, {email, password})
      .toPromise()
      .then((res: any) => {
        localStorage.setItem('token', res.data.token);
        return res;
      })
      .catch(err => err);
    }
    async check() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.store.dispatch({type: 'LOADED'});
        return Promise.reject('Token not provider!');
      } else {
        const headers = new HttpHeaders({ token });
        return this.http.post(
          `${this.URL}user/check`, // uri
          null, // body
          { headers, observe: 'response' } // headers
        )
        .toPromise()
        .then((res: any) => {
          if (res.body.code === 1) {
            this.store.dispatch({type: 'LOADED'});
            return res.body;
          } else {
            return this.router.navigateByUrl('/signin');
          }
        })
        .catch(err => err);
      }
    }
    logOut() {
      localStorage.removeItem('token');
      return this.router.navigateByUrl('signin');
    }
    async changeAvatar(formData: FormData): Promise<any> {
      const token = localStorage.getItem('token');
      if (!token) {
        this.store.dispatch({type: 'LOADED'});
        return this.router.navigateByUrl('/signin');
      }
      const headers = new HttpHeaders({ token });
      this.http.post(
        `${this.URL}user/update-avatar`,
        formData,
        { headers}
      )
      .toPromise()
      .then((res: any) => {
        this.store.dispatch({type: 'USER_INFO', user: res.data});
        return res;
      })
      .catch(err => err);
    }
}
