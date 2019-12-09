import { TestBed } from '@angular/core/testing';

import { PeopleServService } from './people-serv.service';

describe('PeopleServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleServService = TestBed.get(PeopleServService);
    expect(service).toBeTruthy();
  });
});
