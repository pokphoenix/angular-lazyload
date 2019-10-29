import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUploadfileComponent } from './form-uploadfile.component';

describe('FormUploadfileComponent', () => {
  let component: FormUploadfileComponent;
  let fixture: ComponentFixture<FormUploadfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUploadfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUploadfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
