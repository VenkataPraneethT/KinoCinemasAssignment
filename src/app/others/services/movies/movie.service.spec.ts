import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieService } from './movie.service';
import { StorageService } from '../storage/storage.service';

describe('TmdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        StorageService,
        MovieService
      ]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
