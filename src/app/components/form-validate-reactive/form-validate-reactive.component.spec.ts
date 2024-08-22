import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormValidateReactiveComponent } from './form-validate-reactive.component';

describe('FormValidateReactiveComponent', () => {
  let component: FormValidateReactiveComponent;
  let fixture: ComponentFixture<FormValidateReactiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidateReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
