import { TestBed } from '@angular/core/testing';

import { TiendaService } from './tienda.service';

describe('ProductService', () => {
  let service: TiendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
