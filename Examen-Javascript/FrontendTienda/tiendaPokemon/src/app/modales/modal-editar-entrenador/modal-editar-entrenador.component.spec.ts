import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEntrenadorComponent } from './modal-editar-entrenador.component';

describe('ModalEditarEntrenadorComponent', () => {
  let component: ModalEditarEntrenadorComponent;
  let fixture: ComponentFixture<ModalEditarEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
