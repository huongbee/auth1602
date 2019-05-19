import { Component, OnInit } from '@angular/core';
import { User } from '../type';
import { Store } from '@ngrx/store';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  avatarUser: File;
  constructor(private store: Store<User>, private userService: UserService, private fb: FormBuilder) {
    this.store.select('userInfo').subscribe(u => this.user = u);
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      images: ['', Validators.required]
    });
  }
  logOut() {
    this.userService.logOut();
  }

  selectFile(fileInfo) {
    this.avatarUser = fileInfo.target.files[0];
  }
  changeAvatar() {
    const formData = new FormData();
    formData.append('images', this.avatarUser, this.avatarUser.name);
    this.userService.changeAvatar(formData);
  }

}
