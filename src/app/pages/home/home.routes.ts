import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home.component"; 

const routes: Routes = [{
    path: '',
    component: HomeComponent
}];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);