import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoInventarioComponent } from './producto-inventario.component';

describe('ProductoInventarioComponent', () => {
  let component: ProductoInventarioComponent;
  let fixture: ComponentFixture<ProductoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
