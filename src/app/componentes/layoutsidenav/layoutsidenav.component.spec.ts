import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsidenavComponent } from './layoutsidenav.component';

describe('LayoutsidenavComponent', () => {
  let component: LayoutsidenavComponent;
  let fixture: ComponentFixture<LayoutsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
