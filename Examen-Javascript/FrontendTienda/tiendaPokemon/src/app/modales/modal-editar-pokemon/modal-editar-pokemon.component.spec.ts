import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPokemonComponent } from './modal-editar-pokemon.component';

describe('ModalEditarPokemonComponent', () => {
  let component: ModalEditarPokemonComponent;
  let fixture: ComponentFixture<ModalEditarPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
