import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteContactComponent } from './child-route-contact.component';

describe('ChildRouteContactComponent', () => {
  let component: ChildRouteContactComponent;
  let fixture: ComponentFixture<ChildRouteContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
