import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCatalogoProductoComponent } from './formulario-catalogo-producto.component';

describe('FormularioCatalogoProductoComponent', () => {
  let component: FormularioCatalogoProductoComponent;
  let fixture: ComponentFixture<FormularioCatalogoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCatalogoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCatalogoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
