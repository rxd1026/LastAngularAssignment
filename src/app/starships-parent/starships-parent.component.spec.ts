import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsParentComponent } from './starships-parent.component';

describe('StarshipsParentComponent', () => {
  let component: StarshipsParentComponent;
  let fixture: ComponentFixture<StarshipsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
