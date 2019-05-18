import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    URL = 'http://localhost:3000/';

    constructor(private http: HttpClient, private router: Router) { }

    async signUp(email: string, name: string, password: string): Promise<any> {
        return this.http.post(`${this.URL}user/signup`, {email, password, name})
        .toPromise()
        .then(res => res)
        .catch(err => err);
    }
    async login(email: string, password: string) {
      return this.http.post(`${this.URL}user/signin`, {email, password})
      .toPromise()
      .then(res => {
        localStorage.setItem('token', res.data.token);
        return res;
      })
      .catch(err => err);
    }
    async check() {
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        return this.router.navigateByUrl('/signin');
      }
      const headers = new HttpHeaders({ token });
      return this.http.post(
        `${this.URL}user/check`, // uri
        null, // body
        { headers, observe: 'response' } // headers
      )
      .toPromise()
      .then((res: any) => {
        if (res.body.code === 1) {
          return res.body;
        } else {
          return this.router.navigateByUrl('/signin');
        }
      })
      .catch(err => err);
    }
}