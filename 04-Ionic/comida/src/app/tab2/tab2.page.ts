import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page
implements OnInit{
  titulo: string;
  subtitulo: string;

ngOnInit(): void {
  this.titulo = 'Archivos';
  this.subtitulo + 'Escuela Politécnica Nacional';
}

  constructor() {}

}
