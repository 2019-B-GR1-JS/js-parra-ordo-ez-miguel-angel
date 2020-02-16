import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegitrarUsuarioComponent } from './modal-regitrar-usuario.component';

describe('ModalRegitrarUsuarioComponent', () => {
  let component: ModalRegitrarUsuarioComponent;
  let fixture: ComponentFixture<ModalRegitrarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegitrarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegitrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
