import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { name: 'John Doe', city: 'New York', email: 'john@example.com', password: '123456' },
    { name: 'Jane Smith', city: 'London', email: 'jane@example.com', password: 'abcdef' }
  ];

  signup(signupData: any): Observable<any> {
    const existingUser = this.users.find(user => user.email === signupData.email);
    if (existingUser) {
      return throwError({ message: 'User already exists' });
    } else {
      this.users.push(signupData);
      return of({ message: 'Signup successful', user: signupData });
    }
  }

  login(loginData: any): Observable<any> {
    const user = this.users.find(
      user => user.email === loginData.email && user.password === loginData.password
    );
    if (user) {
      localStorage.setItem('authToken', 'userloggedin'); // Store the token after login

      return of({ message: 'Login successful', token: 'userloggedin', user });
    } else {
      return throwError({ message: 'Invalid email or password' });
    }
  }
  logout(): void {
    localStorage.removeItem('authToken'); // Remove the token from localStorage to log out
  }
  getUsers(): Observable<any[]> {
    return of(this.users);
  }
}
