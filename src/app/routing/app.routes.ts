import { Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    data: { pageTitle: '' },
    children: [{
	    path: 'home',
	    loadChildren : '../pages/home/home.module#HomeModule',
	    data: { title: 'Home'}
	},{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full'
	}]
}];