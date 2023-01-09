import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAdminComponent } from './modificar-admin.component';

describe('ModificarAdminComponent', () => {
  let component: ModificarAdminComponent;
  let fixture: ComponentFixture<ModificarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
