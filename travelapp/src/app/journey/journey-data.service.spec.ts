import { TestBed, inject } from '@angular/core/testing';

import { JourneyDataService } from './journey-data.service';

describe('JourneyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JourneyDataService]
    });
  });

  it('should be created', inject([JourneyDataService], (service: JourneyDataService) => {
    expect(service).toBeTruthy();
  }));
});
