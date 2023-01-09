import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSecretariaComponent } from './modificar-secretaria.component';

describe('ModificarSecretariaComponent', () => {
  let component: ModificarSecretariaComponent;
  let fixture: ComponentFixture<ModificarSecretariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSecretariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
