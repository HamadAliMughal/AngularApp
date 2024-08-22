
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
 
  imports: [
    FormsModule, // Import for ngModel
    CommonModule, // Import for date pipe
    RouterOutlet // Import if using routing
    ,
    HomeComponent
],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherData: any;

  city: string = 'Manila'; // Default city
   title = 'my-angular-app';
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
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
