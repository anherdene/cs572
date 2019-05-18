import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../app-service.service";

@Component({
  selector: 'app-users',
  template: `
  <ul>
    <li *ngFor="let data of myData; let i = index">
     <a [routerLink]="[i]" >
      Name-- {{data.name.first | json}}
    </a>
    </li>
  </ul>`,
})
export class UsersComponent implements OnInit {
  myData;
  constructor(private service: AppServiceService) {
    this.service.getOnlineData();
    setTimeout(() => {
      this.myData = this.service.getCachedData().results;
      console.log(this.myData);
    }, 0);

  }
  ngOnInit() {

  }

}
