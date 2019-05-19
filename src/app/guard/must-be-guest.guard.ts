import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class MustBeGuestGuard implements CanActivate {
    constructor(private router: Router) {
    }
    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (!localStorage.getItem('token')) { // true
            return true;
        } else {
            this.router.navigateByUrl('/');
            return !localStorage.getItem('token'); // false
        }
    }
}
