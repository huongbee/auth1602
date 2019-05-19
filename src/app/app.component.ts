import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Store } from '@ngrx/store';
import { Loading } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth1802';
  loading: boolean;
  constructor(private userService: UserService, private store: Store<Loading>) {
    this.store.select('loading').subscribe(l => this.loading = l;);
  }

}
