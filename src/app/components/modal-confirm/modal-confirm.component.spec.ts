import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalConfirmComponent } from './modal-confirm.component';

describe('ModalConfirmComponent', () => {
  let component: ModalConfirmComponent;
  let fixture: ComponentFixture<ModalConfirmComponent>;

  beforeEach(() => {
    const nzModalServiceStub = () => ({ confirm: (object: any) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ModalConfirmComponent],
      providers: [{ provide: NzModalService, useFactory: nzModalServiceStub }],
    });
    fixture = TestBed.createComponent(ModalConfirmComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('showConfirm', () => {
    it('makes expected calls', () => {
      const nzModalServiceStub: NzModalService =
        fixture.debugElement.injector.get(NzModalService);
      spyOn(nzModalServiceStub, 'confirm').and.callThrough();
      component.showConfirm();
      expect(nzModalServiceStub.confirm).toHaveBeenCalled();
    });
  });

  describe('showDeleteConfirm', () => {
    it('makes expected calls', () => {
      const nzModalServiceStub: NzModalService =
        fixture.debugElement.injector.get(NzModalService);
      spyOn(nzModalServiceStub, 'confirm').and.callThrough();
      component.showDeleteConfirm();
      expect(nzModalServiceStub.confirm).toHaveBeenCalled();
    });
  });
});
