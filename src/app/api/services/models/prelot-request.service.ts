import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { Plugins } from '@capacitor/core';


const { Modals } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PrelotRequestService {

  
  private endPoint:string = "prelot_requests";

  constructor(
    public api: RestApiService
  ) { }


  
  getRequests() {
    let answer: any = undefined;
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

 
 async enviarOrden(pedido, comments, planned_packaging_date) {
    let resultado = false;
    var request = {
      administrator_id:1,
      cart: pedido,
      comments: (comments == undefined || comments == "") ? null : comments,
      planned_packaging_date: (planned_packaging_date == undefined || planned_packaging_date == "") ? null : planned_packaging_date,
    };
    
    
    
    this.api.post(this.endPoint + "/group", request)
    .subscribe(res => {
      if (res.success) {
          resultado = true;
          return resultado;
      }
      else {
        console.log(res);
        return resultado;
      }
    }, err => {
      console.log(err);
    });
    
  }

  
  async cambiarEstadoPrelot(request, prelotRequest)
  {
    if( prelotRequest != undefined)
    {
      return new Promise(resolve=>{
       
      this.api.update(this.endPoint, prelotRequest.uuid, request)
      .subscribe(res => {
        if(res.success)
        {
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
      })});
    
    }
    
  }

  cambiarEstadoPrelotSolicitar(prelotRequest)
  {
    var request = {
      packager_id:1,
      new_status: "Solicitar"
     };
     return new Promise(resolve=>{
     this.cambiarEstadoPrelot(request, prelotRequest).then(data =>{
       resolve(data);
     })});
  }
  async cambiarEstadoPrelotSolicitarYEmpacar(prelotRequest)
  {
    if(prelotRequest != undefined)
    {
      let prompt = await Modals.prompt({
        title: 'Corfirmar empaque',
        message: "Escriba la cantidad empacada de " + prelotRequest.presentation.short_name,
      });
      if( !prompt.cancelled)
      {
        let numero = parseInt(prompt.value);
        if( isNaN(numero))
        {
          
          let alertRet = await Modals.alert({
            title: 'Error',
            message: "Debe escribir un número"
          });
        }
        else if (numero < 1)
        {
          
          let alertRet = await Modals.alert({
            title: 'Error',
            message: 'Debe escribir una cantidad válida'
          });
        }
        else if (numero > prelotRequest.requested_quantity)
        {
          
          let alertRet = await Modals.alert({
            title: 'Error',
            message: 'No debería empacar una cantidad mayor'
          });
        }
        else
        {
          var request = {
            packager_id:1,
            new_status: "Solicitar-Empacar",
            real_quantity: numero
          };
            return new Promise(resolve=>{
              this.cambiarEstadoPrelot(request, prelotRequest).then(data =>{
                resolve(data);
              })});
        }
      }
      
    }
  }
}
