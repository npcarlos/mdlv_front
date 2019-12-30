import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { OrderService } from 'src/app/api/services/order.service';

import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

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
    private orderService: OrderService,
    public api: RestApiService
  ) { }

  ngOnInit() {
    this.idOrder = this.activatedRoute.snapshot.paramMap.get('order');
    this.orderService.getOrderInfo(this.idOrder).then(order => {
        this.currentOrder = order;
    });

  }

  downloadReceipt()
  {
    if( this.currentOrder != undefined)
    {
      this.orderService.downloadReceipt(this.currentOrder);
    }
  }

  async eliminarOrden(order)
  {
    let alertRet = await Modals.alert({
      title: 'Error',
      message: "No implementado aún"
    });
  }

  marcarComoEntregado()
  {
    if(this.currentOrder != undefined)
    {
      this.orderService.marcarComoEntregado(this.currentOrder).then(order => {
          this.currentOrder = order;
      });
    }
  }
}
