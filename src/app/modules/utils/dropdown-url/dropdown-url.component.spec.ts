import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUrlComponent } from './dropdown-url.component';

describe('DropdownUrlComponent', () => {
  let component: DropdownUrlComponent;
  let fixture: ComponentFixture<DropdownUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
