import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeNavigationComponent } from './relative-navigation.component';

describe('RelativeNavigationComponent', () => {
  let component: RelativeNavigationComponent;
  let fixture: ComponentFixture<RelativeNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
