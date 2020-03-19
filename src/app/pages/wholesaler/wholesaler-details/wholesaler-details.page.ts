import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/api/services/models/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wholesaler-details',
  templateUrl: './wholesaler-details.page.html',
  styleUrls: ['./wholesaler-details.page.scss'],
})
export class WholesalerDetailsPage implements OnInit {
  
  wholesaler: any;
  idWholesaler: any;
  totalValue: any;
  

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.idWholesaler = this.activatedRoute.snapshot.paramMap.get('wholesaler');

    this.customerService.getWholesaler(this.idWholesaler).then(data =>
      {
        this.wholesaler = data;
      }
    );
    //this.mapa.loadMap();
  }
}
