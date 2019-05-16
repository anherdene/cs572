import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart',
  template: `
    <p isVisible dispay="false"> smart works!</p>
    <div *ngFor="let d of datas; let i = index">
        <dumb [data]="d" makeBigger>
          {{i}}
        </dumb>
    </div>
     
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  datas:string[] = ['hello1','world','super'];

  constructor() { }

  ngOnInit() {
  }

}
