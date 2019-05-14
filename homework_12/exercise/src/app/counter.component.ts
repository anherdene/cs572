import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decreaseCounter($event)">-</button>
    {{counterValue}}
    <button (click)="increaseCounter($event)">+</button>
    <ng-content></ng-content>
    <br>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input() counter:number;
  @Input() index:number;
  counterValue:number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }



  ngOnInit() {
    this.counterValue = this.counter;
    console.log(this.counterValue);
    console.log(this.index);
  }

  decreaseCounter($event){
    if(this.counterValue==0) return;

    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }
  increaseCounter($event){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
}
