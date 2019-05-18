import { Component, OnInit } from '@angular/core';
import { User } from '../type';
import { Store } from '@ngrx/store';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private store: Store<User>, private userService: UserService) {
    this.store.select('userInfo').subscribe(u => this.user = u);
  }

  ngOnInit() {
    this.userService.check()
    .then(res => {
      console.log(res.body);
      console.log(res.headers.get('Content-Type'));
      console.log(res.headers.get('token'));
    })
    .catch(err => {
      console.log(err);
    });
  }

}
