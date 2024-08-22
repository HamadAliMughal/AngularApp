import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken'); // Assuming your token is stored under 'authToken'
    if (token) {
      return true; // Allow access to the route
    } else {
      alert('You need to be logged in to access this page. Redirecting to signup...');
      this.router.navigate(['/signup']);
      return false; // Block access to the route
    }
  }
}
