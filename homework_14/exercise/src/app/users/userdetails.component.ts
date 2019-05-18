import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../app-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  template: '{{myData | json}}',
})
export class UserdetailsComponent implements OnInit {

  myData;
  constructor(private service: AppServiceService, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.myData = service.getCachedData().results[params['uuid']]; console.log(this.myData) });
  }

  ngOnInit() {
  }

}
