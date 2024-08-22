import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule
 } from '@angular/forms';
 import {  OnInit } from '@angular/core';
 import { RouterOutlet } from '@angular/router';
 import { WeatherService } from '../weather.service';
 import { AuthService } from '../auth.service';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,      // Import for ngModel
    CommonModule,     // Import for date pipe
    RouterOutlet      // Import if using routing
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  weatherData: any;

  city: string = 'Manila'; // Default city
   title = 'my-angular-app';
  constructor(private weatherService: WeatherService, private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.getWeather();
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(this.weatherData); // Check the data in the console
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
