import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteOverviewComponent } from './child-route-overview.component';

describe('ChildRouteOverviewComponent', () => {
  let component: ChildRouteOverviewComponent;
  let fixture: ComponentFixture<ChildRouteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
