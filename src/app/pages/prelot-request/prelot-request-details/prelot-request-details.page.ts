import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prelot-request-details',
  templateUrl: './prelot-request-details.page.html',
  styleUrls: ['./prelot-request-details.page.scss'],
})
export class PrelotRequestDetailsPage implements OnInit {

  private prelotRequest:any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let requestInfo = this.activatedRoute.snapshot.paramMap.get('request');
    if( requestInfo != null &&  requestInfo != undefined && requestInfo != "")
    {
      console.log("prelot deails");
      this.prelotRequest = JSON.parse(requestInfo);
      console.log(this.prelotRequest);
    }
    else{
      console.log("No hay nada");
    }
  }

}
