import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Ejemplos básicos';
  imgSrc = 'assets/imgs/ejemplo.svg';
  fecha = new Date();
  objeto = { id: 5, nombre: 'ejemplo', fecha: new Date()};
  array = [1, 3, 5, 7, 9];

  mapeoMensajes:
      {[k: string]: string} = {
        '=0': 'No tienes ningún mensaje.',
        '=1': 'Un mensaje.',
        other: '# mensajes.'};
  diccionario: any = {
    casa: 'home',
    perro: 'dog',
    other: 'No reconocido'};

  clases = { importante: true, enfasis: true};

  estilos = {
    'font-size': '16px',
    border: 'solid 1px black'
  };

  redondeado = '5';
}
