import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { OrderService } from 'src/app/api/services/models/order.service';

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
    private orderService: OrderService,
    public api: RestApiService
  ) { }

  ngOnInit()
  {
    
  }
  ionViewDidEnter()
  {
    this.orderService.getOrders().then(data =>
      {
        this.orders = data;
        this.originalOrders = data;
      }
    );
  }
  downloadReceipt(order)
  {
     this.orderService.downloadReceipt(order)
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

  marcarComoEntregado(order)
  {
    this.orderService.marcarComoEntregado(order).then(data => {
      this.orderService.getOrders().then(dataR => {
        this.originalOrders = dataR;
        this.orders = this.originalOrders;
      })
    });
  }
}
