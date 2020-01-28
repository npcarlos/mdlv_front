import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/api/services/models/customer.service';

@Component({
  selector: 'app-wholesaler-list',
  templateUrl: './wholesaler-list.page.html',
  styleUrls: ['./wholesaler-list.page.scss'],
})
export class WholesalerListPage implements OnInit {

  wholesalers: any;

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.customerService.getWholesalers().then(data =>
      {
        this.wholesalers = data;
      }
    );
  }

  loadData(ev){
    console.log(ev);
  }

  viewWholesalerDetails(wholesaler)
  {
    this.router.navigate(['/wholesaler-details', {wholesaler: wholesaler.uuid}]);
  }
}
