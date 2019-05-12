import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

}
