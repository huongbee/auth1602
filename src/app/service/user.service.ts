import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    URL = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    async signUp(email: string, name: string, password: string): Promise<any> {
        return this.http.post(`${this.URL}user/signup`, {email, password, name})
        .toPromise()
        .then(res => res)
        .catch(err => err);
    }
    async login(email: string, password: string) {
      return this.http.post(`${this.URL}user/signin`, {email, password})
      .toPromise()
      .then(res => res)
      .catch(err => err);
    }
}
