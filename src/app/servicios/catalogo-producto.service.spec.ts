import { TestBed } from '@angular/core/testing';

import { CatalogoProductoService } from './catalogo-producto.service';

describe('CatalogoProductoService', () => {
  let service: CatalogoProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
