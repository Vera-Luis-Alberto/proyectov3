import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarChoferComponent } from './modificar-chofer.component';

describe('ModificarChoferComponent', () => {
  let component: ModificarChoferComponent;
  let fixture: ComponentFixture<ModificarChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarChoferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
