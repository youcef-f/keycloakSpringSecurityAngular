import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KeycloakSecurityService} from "./keycloak-security.service";
import {Supplier} from "../suppliers/classes/supplier";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private  httpClient: HttpClient, private securityService: KeycloakSecurityService) {
  }


  //  C'est HTTP_INERCEPTOR qui insere automatique le jwt dans le header
  public getSuppliers(): any {
    return this.httpClient.get('http://localhost:8083/suppliers');
  }

  /*
   // Ajoute manuellemet le header jwt dans la requete
    public getSuppliersAjoutHeaderManuel(): any {

      return this.httpClient.get('http://localhost:8083/suppliers',
        {
          headers: new HttpHeaders(
            {Authorization: 'Bearer ' + this.securityService.kcInstance.token})
        });
    }
    */

}
