import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/api/services/rest-api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {


  private endPoint:string = "orders";

  private currentOrder:any;

  private idOrder: any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    public api: RestApiService
  ) { }

  ngOnInit() {
    this.idOrder = this.activatedRoute.snapshot.paramMap.get('order');
    this.getOrderInfo();

  }

  
  async getOrderInfo() {

    await this.api.get(this.endPoint + "/" + this.idOrder)
      .subscribe(res => {
        console.log(res);
        if(res.success)
        {
            this.currentOrder = res.data;
            console.log(JSON.stringify(this.currentOrder));
        }
        else
        {
          console.log(res);
        }
        //loading.dismiss();
      }, err => {
        console.log(err);
        //loading.dismiss();
      });

  }

  downloadReceipt()
  {
     let url = this.api.getApiURL() + this.endPoint + '/' + this.idOrder + '/generatePDF';
     window.open(url);
  }

}
