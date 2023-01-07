import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoChoferComponent } from './nuevo-chofer.component';

describe('NuevoChoferComponent', () => {
  let component: NuevoChoferComponent;
  let fixture: ComponentFixture<NuevoChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoChoferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
