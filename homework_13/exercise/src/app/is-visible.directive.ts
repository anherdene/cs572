import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit{

  @Input() dispay:boolean;

  constructor(private e:ElementRef,private  r:Renderer2) {

  }

  ngOnInit(): void {
    console.log(this.dispay);
    if(!!this.dispay){
      this.e.nativeElement.style.display='block';
    }else {
      this.e.nativeElement.style.display='none';
    }

  }
}
