import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lot-details',
  templateUrl: './lot-details.page.html',
  styleUrls: ['./lot-details.page.scss'],
})
export class LotDetailsPage implements OnInit {

  presentation: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    let jsonData = this.activatedRoute.snapshot.paramMap.get('presentation');
    this.presentation = JSON.parse(jsonData);
    console.log(jsonData);
  }

}
