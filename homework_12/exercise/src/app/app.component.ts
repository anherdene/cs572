import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p> {{title}} </p>
    <app-counter *ngFor="let counter of componentCounterValue;let i = index"
               [counter]="counter" [index]="i"
               (counterChange)="componentCounterEvent($event,i)">
      {{componentCounterValue[i]}}
    </app-counter>
    <!--<app-counter-->
      <!--[counter]="componentCounterValue[0]"-->
      <!--(counterChange)="componentCounterEvent($event,0)">-->
      <!--{{componentCounterValue[0]}}-->
    <!--</app-counter>-->
    <!--<app-counter-->
      <!--[counter]="componentCounterValue[1]"-->
      <!--(counterChange)="componentCounterEvent($event,1)">-->
      <!--{{componentCounterValue[1]}}-->
    <!--</app-counter>-->
  `,
  styles: []
})
export class AppComponent {
  title = 'exercise';
  componentCounterValue:number[] = [5,10,15];

  componentCounterEvent(counter:number,index:number){
    this.componentCounterValue[index] = counter;
    console.log(counter);
    console.log(index);
  }
}
