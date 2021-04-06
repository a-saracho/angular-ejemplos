import { Component, Input } from '@angular/core';

/*
 * selector: nombre con el que se va a invocar al componente
 * template: html del componente
 * style: css del componente
 */
@Component({
    selector: 'app-titulo',
    template: '<h1>{{texto}}</h1>',
    styles: [`
        h1, h2, h3, h4, h5, h6 {
            text-transform: uppercase;
        }
    `]
})
/* El componente contiene un título que se le introduce */
export class TituloComponent {
    @Input() texto = 'Mi super título';
}
