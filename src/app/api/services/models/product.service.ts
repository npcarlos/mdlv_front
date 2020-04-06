import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endPoint:string = "products";

  constructor(
    public api: RestApiService
  ) { }

  getForecast() {
    return new Promise(resolve=>{
          this.api.get(this.endPoint + "/forecast")
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
}
