import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, DoBootstrap, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {ProductsComponent} from './products/products.component';
import {KeycloakSecurityService} from './services/keycloak-security.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptrService} from './services/request-interceptr.service';
import {HomeComponent} from './home/home.component';


export function keycloakFactory(kcSecurity: KeycloakSecurityService) {
  return () => kcSecurity.init();
}


const securityService = new KeycloakSecurityService();

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // {provide: KeycloakSecurityService, useValue: securityService},
    // initialisation de keykloak avant le demerrage de l'application
     {provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: keycloakFactory, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptrService, multi: true}
  ],

  // entryComponents: [AppComponent]

    bootstrap: [AppComponent]


})
export class AppModule {
}



/*
export class AppModule implements DoBootstrap {

  ngDoBootstrap(appRef: import('@angular/core').ApplicationRef): void {
    securityService.init()
      .then( (authenticated) => {
        console.log('keycload success..... ', authenticated);
        appRef.bootstrap(AppComponent);
      })
      .catch( (error) => {
        console.log('keycloak error ', error);
      });
    // throw new Error('Method not implemented.');

  }

}
*/
