import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleParentComponent } from './people-parent.component';

describe('PeopleParentComponent', () => {
  let component: PeopleParentComponent;
  let fixture: ComponentFixture<PeopleParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
