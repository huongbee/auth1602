import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signUpForm = this.fb.group({
      email: ['',
        [Validators.email, Validators.required]
      ],
      name: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  signUp() {
    const { email, name, password } = this.signUpForm.value;
    this.userService.signUp(email, name, password)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

}
