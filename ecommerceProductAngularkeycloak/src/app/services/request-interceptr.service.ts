import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakSecurityService} from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptrService implements HttpInterceptor {

  constructor(private securityService: KeycloakSecurityService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request http interceptor ....')
    if (!this.securityService.kcInstance.authenticated) {
      return next.handle(req);
    }

    // clone request and add jwk token header
    const requestUpdate = req.clone({setHeaders: {Authorization: 'Bearer ' + this.securityService.kcInstance.token}});

    // return nwely modified request
    return next.handle(requestUpdate);
  }


}
