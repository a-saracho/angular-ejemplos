import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnChanges {
  @Output() datoModificado = new EventEmitter<string>();
  @Input()

  get dato(): string {
    console.log(`Se ha pedido el dato ${this.miDato} en hijo`);
    return this.miDato;
  }

  set dato(dato: string) {
    console.log(`Se ha recibido el dato ${dato} en hijo`);
    this.miDato = dato;
  }


  private miDato = '';
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

  botonClick(): void {
    this.dato = this.dato + this.dato;
    this.datoModificado.emit(this.dato);
  }
}
