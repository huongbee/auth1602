import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private fb: FormBuilder) {
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
    
  }

}
