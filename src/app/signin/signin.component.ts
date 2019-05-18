import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../type';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private store: Store<User>
  ) {
    this.signInForm = this.fb.group({
      email: ['',
        [Validators.required, Validators.email]
      ],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }
  signIn() {
    const { email, password } = this.signInForm.value;
    this.userService.login(email, password)
    .then(res => {
      console.log(res);
      if (res.code === 1) {
          this.store.dispatch({
            type: 'USER_LOGIN',
            user: res.data
          });
          // save token
          localStorage.setItem('token', res.data.token);
          this.router.navigateByUrl('/');
      } else {
        return this.errorMessage = res.message;
      }
    })
    .catch(err => this.errorMessage = err.message);
  }

}
