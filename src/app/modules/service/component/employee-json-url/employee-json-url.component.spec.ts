import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJsonUrlComponent } from './employee-json-url.component';

describe('EmployeeJsonUrlComponent', () => {
  let component: EmployeeJsonUrlComponent;
  let fixture: ComponentFixture<EmployeeJsonUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeJsonUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeJsonUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
