import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  constructor(private e:ElementRef, private r:Renderer2) {
    r.setStyle(e.nativeElement, 'font-size','12px');
  }

  @HostListener('dblclick', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    // this.e.nativeElement.style.fontSize.px+=2;
    this.e.nativeElement.style.fontSize = (parseInt(this.e.nativeElement.style.fontSize,10) +2)+'px';
    console.log(parseInt(this.e.nativeElement.style.fontSize,10));
  }

}
