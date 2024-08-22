import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthorizationService } from 'app/services/authorization.service';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    const authorizationServiceStub = () => ({
      redirectToLoginPage: () => ({}),
      getUserRoles: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [WelcomeComponent],
      providers: [
        { provide: AuthorizationService, useFactory: authorizationServiceStub }
      ]
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('redirectToLogin', () => {
    it('makes expected calls', () => {
      const authorizationServiceStub: AuthorizationService = fixture.debugElement.injector.get(
        AuthorizationService
      );
      spyOn(authorizationServiceStub, 'redirectToLoginPage').and.callThrough();
      component.redirectToLogin();
      expect(authorizationServiceStub.redirectToLoginPage).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const authorizationServiceStub: AuthorizationService = fixture.debugElement.injector.get(
        AuthorizationService
      );
      spyOn(authorizationServiceStub, 'getUserRoles').and.callThrough();
      component.ngOnInit();
      expect(authorizationServiceStub.getUserRoles).toHaveBeenCalled();
    });
  });
});
