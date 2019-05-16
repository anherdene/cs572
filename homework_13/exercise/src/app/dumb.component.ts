import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dumb',
  template: `
    <p>dumb -- {{data}} -- <ng-content></ng-content></p>
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  @Input()
  data:string;

  constructor() { }

  ngOnInit() {
  }

}
