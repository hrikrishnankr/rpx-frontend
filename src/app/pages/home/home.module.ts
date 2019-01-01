import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutes
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule {}