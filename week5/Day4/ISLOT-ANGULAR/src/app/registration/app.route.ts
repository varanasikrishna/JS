import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import {Route}
import { LoginComponent } from "./registration/pages/login/login.component";

export const routes: Route[
    {
        path : '',
        loadchildren:LandingPageComponent
    },
    {
        path:'landing-page',
        loadchildren:LandingPageComponent
    },
    {
        path:'login',
        loadchildren:LoginComponent
    }

]