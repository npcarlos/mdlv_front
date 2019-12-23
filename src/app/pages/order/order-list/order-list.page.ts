import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/api/services/rest-api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {


  private endPoint:string = "orders";

  private orders: any;
  private originalOrders: any;
  
  constructor(
    private router: Router,
    public api: RestApiService
  ) { }

  ngOnInit() {
    
    this.getOrders();
    
  }

  
  async getOrders() {
    await this.api.get(this.endPoint)
      .subscribe(res => {
        console.log(res);
        if(res.success)
        {
            this.orders = res.data;
            this.originalOrders = res.data;
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

  downloadReceipt(order)
  {
     let url = this.api.getApiURL() + this.endPoint + '/' + order.uuid + '/generatePDF';
     window.open(url);
     console.log(url);
    
    console.log("Descargar " + order.uuid);
  }

  viewDetails(order)
  {
    this.router.navigate(['/order-details', {order: order.uuid}]);
  }

  filterData()
  {
      if(this.orders.length == this.originalOrders.length)
      {
          this.orders = this.orders.filter((order)=>{
            return order.customer.name.includes("ba");
          });
      }
      else
      {
        this.orders = JSON.parse(JSON.stringify(this.originalOrders));
      }
  }
}
