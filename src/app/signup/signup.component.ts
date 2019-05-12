import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      email: ['',
        [Validators.email, Validators.required]
      ],
      name: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      password_confirm: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
    });
  }

  ngOnInit() {
  }
  signUp() {
    const { email, name, password, password_confirm } = this.signUpForm.value;
    if (password !== password_confirm) {
      return this.errorMessage = 'Password not match!';
    }
    this.userService.signUp(email, name, password)
    .then(res => {
      if (res.code === 1) {
        return this.router.navigateByUrl('/signin');
      } else {
        this.signUpForm.setValue({
          email: '',
          name: '',
          password: '',
          password_confirm: ''
        });
        this.errorMessage = res.message;
      }
    })
    .catch(err => this.errorMessage = err.message);
  }

}
