import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminModule } from '../admin/admin.module';
import { InterviewerModule } from '../interviewer/interviewer.module';
import { RouterModule } from '@angular/router';
import { route } from './registration-routes';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    InterviewerModule,
    RouterModule.forChild(route)
  ],
  declarations: [LandingPageComponent, LoginComponent]
})

export class RegistrationModule { }