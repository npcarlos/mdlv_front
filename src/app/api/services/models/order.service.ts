import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  


  private endPoint:string = "orders";

  constructor(
    public api: RestApiService
  ) { }

  
  getOrders() {
    return new Promise(resolve=>{
          this.api.get(this.endPoint)
          //.take(1) //useful if you need the data once and don't want to manually cancel the subscription again
          .subscribe(
              (data:any) => {
                  if(data.success)
                  {
                    resolve(data.data);
                  }
          })
      })
    
 }

 downloadReceipt(order)
 {
    let url = this.api.getApiURL() + this.endPoint + '/' + order.uuid + '/generatePDF';
    window.open(url);
    console.log(url);
   
   console.log("Descargar " + order.uuid);
 }

 
 async getOrderInfo(idOrder) {

    return new Promise(resolve=>{
      
      this.api.get(this.endPoint + "/" + idOrder)
      .subscribe(res => {
        console.log(res);
        if(res.success)
        {
            resolve(res.data);
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
    });
  }

  
  
  async cambiarEstadoEntrega(order, data)
  {
    if( order != undefined)
    {
      return new Promise(resolve=>{
       
        this.api.update(this.endPoint, order.uuid, data)
        .subscribe(res => {
          if(res.success)
          {
            console.log(res.data);
              resolve(res.data);
          }
          else
          {
            let alertRet = Modals.alert({
              title: 'Error',
              message: res
            });
            console.log(res);
            resolve( res );
          }
          //loading.dismiss();
        }, err => {
          console.log(err);
          //loading.dismiss();
        })
      }
      );
    
    }
    
  }
  async marcarComoEntregado(order) {
    if(order != undefined)
    {
      let confirm = await Modals.confirm({
        title: 'Corfirmar entrega',
        message: "Confirmar entrega a " + order.customer.name,
      });
      if( confirm.value)
      {
        let confirmPayment = await Modals.confirm({
          title: 'Corfirmar pago',
          message: "¿El pedido ya está pago?",
        });
        let payment = "f1cc49f3-d32b-472e-a537-9eba6b2546ea";
        if( confirmPayment.value)
        {
          payment = "8e98729e-1f3d-41a5-81b2-f0d7e95cb796";
        }
          var request = {
            deliverer_id: 1,
            delivery_status_id: "f1879d6e-9ab4-4484-abba-f28f03e45627",
            payment_status_id: payment
          };
          
            return new Promise(resolve=>{
              this.cambiarEstadoEntrega(order, request).then(data =>{
                resolve(data);
              })});
              
        
      }
      
    }
  }

}
