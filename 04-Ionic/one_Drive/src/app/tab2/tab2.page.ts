import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  titulo: string;
  subtitulo: string;
  archivos: Archivo[];


  ngOnInit(): void {
    this.titulo = 'Archivos';
    this.subtitulo = 'Escuela Politécnica Nacional'
    this.archivos = [
      {
        icono: "http://pngimg.com/uploads/folder/folder_PNG8773.png",
        compartido: true,
        nombre: 'Adm. Bases',
        tamanio: 90,
        fecha:'2 oct. 2019',
      },
      {
        icono: "http://pngimg.com/uploads/folder/folder_PNG8773.png",
        compartido: false,
        nombre: 'Auditoria',
        tamanio: 2.3,
        fecha:'23 abr. 2019',
      },
      {
        icono: "http://pngimg.com/uploads/folder/folder_PNG8773.png",
        compartido: false,
        nombre: 'Bloc de notas',
        tamanio: 144,
        fecha:'2 oct 2019',
      },
      {
        icono: "http://pngimg.com/uploads/folder/folder_PNG8773.png",
        compartido: false,
        nombre: 'Documentos',
        tamanio: 38,
        fecha:'2 oct 2019',
      },
      {
        icono: "http://pngimg.com/uploads/folder/folder_PNG8773.png",
        compartido: true,
        nombre: 'Gestión de Seguridades',
        tamanio: 560,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/md/20180627/md_5b33460f04516.png",
        compartido: true,
        nombre: 'Libro1',
        tamanio: 320,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/md/20180627/md_5b33460f04516.png",
        compartido: false,
        nombre: 'Cronográma',
        tamanio: 124,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/sm/20180627/sm_5b33460fe6357.png",
        compartido: true,
        nombre: 'Entrevista',
        tamanio: 4.5,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/md/20180627/md_5b334611319f5.png",
        compartido: false,
        nombre: 'Presentación Gestión de Seguridades',
        tamanio: 122,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/sm/20180627/sm_5b33460fe6357.png",
        compartido: true,
        nombre: 'Linux',
        tamanio: 90,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/md/20180627/md_5b334611319f5.png",
        compartido: true,
        nombre: 'Presentación Petroecuador',
        tamanio: 90,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://msftexperts.files.wordpress.com/2018/04/onenote.png",
        compartido: true,
        nombre: 'JavaScript - Clase 1',
        tamanio: 25,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/sm/20180627/sm_5b33460fe6357.png",
        compartido: true,
        nombre: 'Consulta',
        tamanio: 98,
        fecha:'2 oct 2019',
      },
      {
        icono: "https://png.pngtree.com/element_our/md/20180627/md_5b33460f04516.png",
        compartido: false,
        nombre: 'Cuentas',
        tamanio: 544,
        fecha:'2 oct 2019',
      },

    ]
  }

  constructor() {}

}

interface Archivo {
  icono: string;
  nombre: string;
  tamanio: number;
  fecha: string;
  compartido: boolean;
}

