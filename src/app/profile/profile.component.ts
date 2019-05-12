import { Component, OnInit } from '@angular/core';
import { User } from '../type';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private store: Store<User>) {
    this.store.select('userInfo').subscribe(u => this.user = u);
  }

  ngOnInit() {
  }

}
