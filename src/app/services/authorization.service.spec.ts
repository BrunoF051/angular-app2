import { TestBed } from '@angular/core/testing';
import { KeycloakService } from 'keycloak-angular';
import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;

  beforeEach(() => {
    const keycloakServiceStub = () => ({
      login: () => ({}),
      getUsername: () => ({}),
      getUserRoles: () => ({}),
      isLoggedIn: () => ({}),
      logout: (postLogoutRedirectUri: any) => ({}),
    });
    TestBed.configureTestingModule({
      providers: [
        AuthorizationService,
        { provide: KeycloakService, useFactory: keycloakServiceStub },
      ],
    });
    service = TestBed.inject(AuthorizationService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('redirectToLoginPage', () => {
    it('makes expected calls', () => {
      const keycloakServiceStub: KeycloakService =
        TestBed.inject(KeycloakService);
      spyOn(keycloakServiceStub, 'login').and.callThrough();
      service.redirectToLoginPage();
      expect(keycloakServiceStub.login).toHaveBeenCalled();
    });
  });

  describe('getUserName', () => {
    it('makes expected calls', () => {
      const keycloakServiceStub: KeycloakService =
        TestBed.inject(KeycloakService);
      spyOn(keycloakServiceStub, 'getUsername').and.callThrough();
      service.getUserName();
      expect(keycloakServiceStub.getUsername).toHaveBeenCalled();
    });
  });

  describe('getUserRoles', () => {
    it('makes expected calls', () => {
      const keycloakServiceStub: KeycloakService =
        TestBed.inject(KeycloakService);
      spyOn(keycloakServiceStub, 'getUserRoles').and.callThrough();
      service.getUserRoles();
      expect(keycloakServiceStub.getUserRoles).toHaveBeenCalled();
    });
  });

  describe('isLoggedIn', () => {
    it('makes expected calls', () => {
      const keycloakServiceStub: KeycloakService =
        TestBed.inject(KeycloakService);
      spyOn(keycloakServiceStub, 'isLoggedIn').and.callThrough();
      service.isLoggedIn();
      expect(keycloakServiceStub.isLoggedIn).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const keycloakServiceStub: KeycloakService =
        TestBed.inject(KeycloakService);
      spyOn(keycloakServiceStub, 'logout').and.callThrough();
      service.logout();
      expect(keycloakServiceStub.logout).toHaveBeenCalled();
    });
  });
});
