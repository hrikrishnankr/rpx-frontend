/*
** Core modules
**/
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*
** Custom modules
**/
import { AppErrorHandler } from './app.error';
import { AppInterceptor } from './app.interceptor';
import { routes } from './app.routes';

@NgModule({
  imports: [
  	RouterModule.forRoot(routes,{ useHash: true }),
  	HttpClientModule
  ],
  exports: [RouterModule],
  providers: [{
  	provide: ErrorHandler,
  	useClass: AppErrorHandler
    },{
    	provide: HTTP_INTERCEPTORS,
    	useClass: AppInterceptor,
    	multi: true
  }]
})
export class AppRoutingModule { }
