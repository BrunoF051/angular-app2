import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { FormValidateReactiveComponent } from './form-validate-reactive.component';

describe('FormValidateReactiveComponent', () => {
  let component: FormValidateReactiveComponent;
  let fixture: ComponentFixture<FormValidateReactiveComponent>;

  beforeEach(() => {
    const nonNullableFormBuilderStub = () => ({ group: (object: any) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormValidateReactiveComponent],
      providers: [
        {
          provide: NonNullableFormBuilder,
          useFactory: nonNullableFormBuilderStub,
        },
      ],
    });
    fixture = TestBed.createComponent(FormValidateReactiveComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
