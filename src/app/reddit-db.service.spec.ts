import { TestBed } from '@angular/core/testing';

import { RedditDBService } from './reddit-db.service';

describe('RedditDBService', () => {
  let service: RedditDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
