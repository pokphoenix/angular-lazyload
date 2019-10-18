import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamMapComponent } from './route-param-map.component';

describe('RouteParamMapComponent', () => {
  let component: RouteParamMapComponent;
  let fixture: ComponentFixture<RouteParamMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParamMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
