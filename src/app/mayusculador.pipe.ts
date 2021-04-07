import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculador'
})
export class MayusculadorPipe implements PipeTransform {

  /* Modificamos la función transform para aceptar y devolver el tipo de datos que necesitamos
      y definir los argumentos que pueden introducirse. Modificamos también el output que tendrá 
      la función transfor para crear nuestro pipe */
  transform(value: string, ...args: ('todo'|'primera')[]): string {
    if (args.length === 1)
    {
      switch (args[0]) {
        case 'todo': return value.toUpperCase();
        case 'primera': return value[0].toUpperCase() + value.slice(1);
        default: return 'Argumento no reconocido';
      }
    }
    else {
      return value.toUpperCase();
    }
  }

}
