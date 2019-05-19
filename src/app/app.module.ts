import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { RouterModule, Route } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { userReducer, loading } from './ngrx/reducers';
import { StoreModule } from '@ngrx/store';
import { PostComponent } from './post/post.component';
import { MustBeGuestGuard } from './guard/must-be-guest.guard';

const routes: Route[] = [
    { path: 'signin', component: SigninComponent, canActivate: [MustBeGuestGuard]},
    { path: 'signup', component: SignupComponent, canActivate: [MustBeGuestGuard]},
    { path: '', component: ProfileComponent },
    { path: 'post', component: PostComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    NotFoundComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      userInfo: userReducer,
      loading
    })
  ],
  providers: [UserService, MustBeGuestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
