import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakGuard } from './keycloak.guard';

describe('KeycloakGuard', () => {
  let service: KeycloakGuard;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const keycloakServiceStub = () => ({ login: (object: any) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        KeycloakGuard,
        { provide: Router, useFactory: routerStub },
        { provide: KeycloakService, useFactory: keycloakServiceStub }
      ]
    });
    service = TestBed.inject(KeycloakGuard);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('isAccessAllowed', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      const routerStub: Router = TestBed.inject(Router);
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const keycloakServiceStub: KeycloakService = TestBed.inject(
        KeycloakService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(keycloakServiceStub, 'login').and.callThrough();
      service.isAccessAllowed(
        activatedRouteSnapshotStub,
        routerStateSnapshotStub
      );
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(keycloakServiceStub.login).toHaveBeenCalled();
    });
  });
});
