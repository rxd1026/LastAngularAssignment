import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleChildComponent } from './people-child.component';

describe('PeopleChildComponent', () => {
  let component: PeopleChildComponent;
  let fixture: ComponentFixture<PeopleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
