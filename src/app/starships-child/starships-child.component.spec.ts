import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsChildComponent } from './starships-child.component';

describe('StarshipsChildComponent', () => {
  let component: StarshipsChildComponent;
  let fixture: ComponentFixture<StarshipsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
