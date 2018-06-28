import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminModule } from '../admin/admin.module';
import { InterviewerModule } from '../interviewer/interviewer.module';
import { RouterModule } from '@angular/router';
import { registrationRoutes } from './registration-routes';
import { AdminSignupComponent } from './pages/admin-signup/admin-signup.component';
import { InterviewerSignupComponent } from './pages/interviewer-signup/interviewer-signup.component';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    InterviewerModule,
    RouterModule.forChild(registrationRoutes)
  ],
  declarations: [LandingPageComponent, LoginComponent, AdminSignupComponent, InterviewerSignupComponent]
})

export class RegistrationModule { }