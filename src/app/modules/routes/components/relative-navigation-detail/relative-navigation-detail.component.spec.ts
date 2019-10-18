import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeNavigationDetailComponent } from './relative-navigation-detail.component';

describe('RelativeNavigationDetailComponent', () => {
  let component: RelativeNavigationDetailComponent;
  let fixture: ComponentFixture<RelativeNavigationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeNavigationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeNavigationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
