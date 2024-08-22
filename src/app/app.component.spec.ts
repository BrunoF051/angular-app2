import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Route } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';
import { UserIdleService } from 'angular-user-idle';
import { DestroyRef } from '@angular/core';
import { APP_ROUTES } from './pages/welcome/welcome.routes';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const authorizationServiceStub = () => ({
      isLoggedIn: () => ({}),
      getUserName: () => ({}),
      logout: () => ({}),
    });
    const userIdleServiceStub = () => ({
      startWatching: () => ({}),
      onTimerStart: () => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      onTimeout: () => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      resetTimer: () => ({}),
    });
    const destroyRefStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: AuthorizationService, useFactory: authorizationServiceStub },
        { provide: UserIdleService, useFactory: userIdleServiceStub },
        { provide: DestroyRef, useFactory: destroyRefStub },
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isCollapsed has default value`, () => {
    expect(component.isCollapsed).toEqual(false);
  });

  it(`routes has default value`, () => {
    expect(component.routes).toEqual(APP_ROUTES);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const authorizationServiceStub: AuthorizationService =
        fixture.debugElement.injector.get(AuthorizationService);
      const userIdleServiceStub: UserIdleService =
        fixture.debugElement.injector.get(UserIdleService);
      spyOn(authorizationServiceStub, 'isLoggedIn').and.callThrough();
      spyOn(authorizationServiceStub, 'getUserName').and.callThrough();
      spyOn(authorizationServiceStub, 'logout').and.callThrough();
      spyOn(userIdleServiceStub, 'startWatching').and.callThrough();
      spyOn(userIdleServiceStub, 'onTimerStart').and.callThrough();
      spyOn(userIdleServiceStub, 'onTimeout').and.callThrough();
      spyOn(userIdleServiceStub, 'resetTimer').and.callThrough();
      component.ngOnInit();
      expect(authorizationServiceStub.isLoggedIn).toHaveBeenCalled();
      expect(authorizationServiceStub.getUserName).toHaveBeenCalled();
      expect(authorizationServiceStub.logout).toHaveBeenCalled();
      expect(userIdleServiceStub.startWatching).toHaveBeenCalled();
      expect(userIdleServiceStub.onTimerStart).toHaveBeenCalled();
      expect(userIdleServiceStub.onTimeout).toHaveBeenCalled();
      expect(userIdleServiceStub.resetTimer).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const authorizationServiceStub: AuthorizationService =
        fixture.debugElement.injector.get(AuthorizationService);
      spyOn(authorizationServiceStub, 'logout').and.callThrough();
      component.logout();
      expect(authorizationServiceStub.logout).toHaveBeenCalled();
    });
  });
});
