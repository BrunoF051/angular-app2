import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthorizationService } from './../../services/authorization.service';
import { NotAuthorizedComponent } from './not-authorized.component';

describe('NotAuthorizedComponent', () => {
  let component: NotAuthorizedComponent;
  let fixture: ComponentFixture<NotAuthorizedComponent>;

  beforeEach(() => {
    const authorizationServiceStub = () => ({
      redirectToLoginPage: () => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NotAuthorizedComponent],
      providers: [
        { provide: AuthorizationService, useFactory: authorizationServiceStub },
      ],
    });
    fixture = TestBed.createComponent(NotAuthorizedComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const authorizationServiceStub: AuthorizationService =
        fixture.debugElement.injector.get(AuthorizationService);
      spyOn(authorizationServiceStub, 'redirectToLoginPage').and.callThrough();
      component.ngOnInit();
      expect(authorizationServiceStub.redirectToLoginPage).toHaveBeenCalled();
    });
  });
});
