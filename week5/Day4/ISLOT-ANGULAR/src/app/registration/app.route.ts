import {NgModule} from '@angular/core'
import { LandingPageComponent } from './registration/pages/landing-page/landing-page.component';
import {Route} from "@angular/router"
import { LoginComponent } from './registration/pages/login/login.component';
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