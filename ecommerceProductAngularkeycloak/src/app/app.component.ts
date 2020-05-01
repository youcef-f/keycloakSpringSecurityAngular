import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from './services/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ecommerceProductAngularkeycloak';

  constructor(public securityService: KeycloakSecurityService) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.securityService.kcInstance.logout();
  }

  onLogin() {
    this.securityService.kcInstance.login();

  }

  onChangePasssword() {
    this.securityService.kcInstance.accountManagement();

  }

  isAppManager() {
      return  this.securityService.kcInstance.hasRealmRole('app-manager');

  }
}
