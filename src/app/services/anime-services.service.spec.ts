import { TestBed } from '@angular/core/testing';

import { AnimeServicesService } from './anime-services.service';

describe('AnimeServicesService', () => {
  let service: AnimeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
