import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeleccionarPokemonComponent } from './modal-seleccionar-pokemon.component';

describe('ModalSeleccionarPokemonComponent', () => {
  let component: ModalSeleccionarPokemonComponent;
  let fixture: ComponentFixture<ModalSeleccionarPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSeleccionarPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSeleccionarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
