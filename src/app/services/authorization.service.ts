import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private readonly keycloakService: KeycloakService) {}

  redirectToLoginPage(): Promise<void> {
    return this.keycloakService.login();
  }

  getUserName(): string {
    return this.keycloakService.getUsername();
  }

  getUserRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }

  getUserProfile() {
    return this.keycloakService.loadUserProfile();
  }

  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  logout(): void {
    this.keycloakService.logout(environment.keycloak.postLogoutRedirectUri);
  }
}
