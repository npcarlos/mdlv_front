import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private endPoint:string = "customers";

  constructor(
    public api: RestApiService
  )
  {

  }

  getWholesalers() {
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

 
 async getWholesaler(idWholesaler) {

  return new Promise(resolve=>{
    
    this.api.get(this.endPoint + "/" + idWholesaler)
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



}
