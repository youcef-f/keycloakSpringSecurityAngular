import {Injectable} from '@angular/core';
// import {any} from 'codelyzer/util/function';
import {KeycloakInstance} from 'keycloak-js';

declare var Keycloak: any;


@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {


  // précédente facon de faire
    public kcInstance: KeycloakInstance;

    constructor() {
    }

    // Asynchrone
    async init() {
      console.log('Security initialisation ...');

      this.kcInstance = new Keycloak({
          url: 'http://localhost:8080/auth',
          realm: 'ecommerce',
          clientId: 'AngularProductApp'
        }
      );


  // Asynchrone
      await this.kcInstance.init(
        {
          // onLoad: 'login-required'
          onLoad: 'check-sso'
        }
      );

      console.log(this.kcInstance);
      console.log(this.kcInstance.tokenParsed);
      console.log(this.kcInstance.token);
    }




  public isManager(): boolean {
    return false;
  }



}

