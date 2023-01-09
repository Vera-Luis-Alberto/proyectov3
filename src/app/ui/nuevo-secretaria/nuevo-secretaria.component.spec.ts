import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSecretariaComponent } from './nuevo-secretaria.component';

describe('NuevoSecretariaComponent', () => {
  let component: NuevoSecretariaComponent;
  let fixture: ComponentFixture<NuevoSecretariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoSecretariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
