import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (response) => {
        console.log('User logged in successfully', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
