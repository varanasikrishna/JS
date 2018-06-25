import { Route } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { patch } from 'webdriver-js-extender';

export const route:Route[] = [
  { 
    path: '',
    component: LandingPageComponent
  },
  {
      path: 'login',
      component: LoginComponent
  }  
]