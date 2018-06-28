import { Route } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { patch } from 'webdriver-js-extender';
import { InterviewerSignupComponent } from './pages/interviewer-signup/interviewer-signup.component';
import { AdminSignupComponent } from './pages/admin-signup/admin-signup.component';

export const registrationRoutes:Route[] = [
  { 
    path: '',
    component: LandingPageComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'admin-signup',
    component: AdminSignupComponent
},
{
    path: 'interviewer-signup',
    component: InterviewerSignupComponent
}  
];