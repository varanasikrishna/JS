import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, LoginComponent]
})
export class RegistrationModule { }
