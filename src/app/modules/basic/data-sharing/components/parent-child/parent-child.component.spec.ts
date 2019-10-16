import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataSharingParentChildComponent } from './parent-child.component';

describe('BasicDataSharingParentChildComponent', () => {
  let component: BasicDataSharingParentChildComponent;
  let fixture: ComponentFixture<BasicDataSharingParentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDataSharingParentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataSharingParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
