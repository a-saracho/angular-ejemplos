import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFosforito]'
})
export class FosforitoDirective {
  @Input('appFosforito') color = 'yellow';
  @Input() colorPorDefecto = '';

  constructor(private el: ElementRef, ) {
    // El elemento se crea con el color que queremos
    // el.nativeElement.style.backgroundColor = this.color;
  }

  /* Toma color solo cuando tiene el ratón encima */
  @HostListener('mouseenter') onMouseEnter(): void {
    this.cambiarColorFondo(this.color || this.colorPorDefecto || '#FF0000');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.cambiarColorFondo('initial');
  }

  cambiarColorFondo(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
