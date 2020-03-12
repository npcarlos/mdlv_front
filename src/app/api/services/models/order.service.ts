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
        // Pago Pendiente
        let payment = "49049c00-95d0-4a6d-855b-199dbd8ee468";
        if( confirmPayment.value)
        {
          // Pago exitoso
          payment = "59e47cf3-bdc7-4f2a-83be-73db7e86646b";
        }
          var request = {
            deliverer_id: 1,
            // Estado Entregado
            delivery_status_id: "1aa3e917-d521-4ffe-b399-4fad101601a9",
            payment_status_id: payment
          };
          
            return new Promise(resolve=>{
              this.cambiarEstadoEntrega(order, request).then(data =>{
                resolve(data);
              })});
              
        
      }
      
    }
  }


  
  async enviarOrden(uuid, pedido, public_comments, private_comments) {
    
    var request = {
      customer_id:uuid,
      seller_id:1,
      cart: pedido,
      public_comments: public_comments,
      private_comments: private_comments,
     };
     
     console.log(JSON.stringify(request));
     
     return new Promise(resolve=>{
        this.api.post("orders", request)
          .subscribe(res => {
            console.log(JSON.stringify(res));
            if (res.success) {
                resolve(res);
            }
            else {
              console.log(res);
            }
          }, err => {
            console.log(err);
          });
    });
 }
}