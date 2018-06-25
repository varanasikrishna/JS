import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'
import { RegistrationModule } from './registration/registration.Module';
import { LoginComponent } from './registration/pages/login/login.component';
import {route} from './app.route';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
