import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEmployeeJsonUrlComponent } from './employee-json-url.component';

describe('ServiceEmployeeJsonUrlComponent', () => {
  let component: ServiceEmployeeJsonUrlComponent;
  let fixture: ComponentFixture<ServiceEmployeeJsonUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEmployeeJsonUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEmployeeJsonUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
