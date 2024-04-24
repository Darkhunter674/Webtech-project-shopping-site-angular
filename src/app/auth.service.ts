import { Injectable } from '@angular/core';
import { Router, NavigationEnd,CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate{
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true; // User is logged in
    } else {
      this.router.navigate(['/login']); // Redirect to login page
      return false;
    }
  }
}
