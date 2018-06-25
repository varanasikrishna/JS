import {NgModule} from '@angular/core'
import {RouterModule,Route} from "@angular/router";
import { AppComponent } from './app.component';

export const route: Route[]=[
    {
        path : '',
        loadChildren:'./registration/registration.module#RegistrationModule'
    }
]