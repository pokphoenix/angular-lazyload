import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTdfComponent } from './form-tdf.component';

describe('FormTdfComponent', () => {
  let component: FormTdfComponent;
  let fixture: ComponentFixture<FormTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
