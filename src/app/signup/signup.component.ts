import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule]
})
export class SignupComponent {
  name: string = '';
  city: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  onSignup() {
    console.log('Name:', this.name);
    console.log('City:', this.city);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
    const signupData = {
      name: this.name,
      city: this.city,
      email: this.email,
      password: this.password
    };
  
    this.authService.signup(signupData).subscribe({
      next: (response) => {
        console.log('User signed up successfully', response);
        this.router.navigate(['/login']); // Navigate to login after successful signup
      },
      error: (error) => {
        console.error('Signup failed', error);
      }
    });
  }
  }
