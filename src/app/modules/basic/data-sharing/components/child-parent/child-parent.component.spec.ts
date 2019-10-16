import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataSharingChildParentComponent } from './child-parent.component';

describe('BasicDataSharingChildParentComponent', () => {
  let component: BasicDataSharingChildParentComponent;
  let fixture: ComponentFixture<BasicDataSharingChildParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDataSharingChildParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataSharingChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
