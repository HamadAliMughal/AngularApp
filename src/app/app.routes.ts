import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [

   {path : '', component : HomeComponent ,canActivate: [AuthGuard] },
    {path : 'login', component : LoginComponent},
    {path : 'signup', component : SignupComponent}
];
