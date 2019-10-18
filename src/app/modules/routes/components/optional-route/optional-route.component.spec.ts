import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalRouteComponent } from './optional-route.component';

describe('OptionalRouteComponent', () => {
  let component: OptionalRouteComponent;
  let fixture: ComponentFixture<OptionalRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
