import {NgModule} from '@angular/core'
import {RouterModule,Route} from "@angular/router"
import { LoginComponent } from './registration/pages/login/login.component';
import { LandingPageComponent } from './registration/pages/landing-page/landing-page.component';
export const routes: Route[]=[
    {
        path : '',
        component:LandingPageComponent
    },
    {
        path:'landing-page',
        component:LandingPageComponent
    },
    {
        path:'login',
        component:LoginComponent
    }

]