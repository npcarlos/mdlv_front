import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.page.html',
  styleUrls: ['./lot-list.page.scss'],
})
export class LotListPage implements OnInit {

  private endPoint:string = "products";

  private products: any;
  
  constructor(
    public api: RestApiService
    ) 
    {

    }

    ngOnInit() {
      this.getProducts();
      }
    
      async getProducts() {
    
        await this.api.get(this.endPoint)
          .subscribe(res => {
            console.log(res);
            if(res.success)
            {
                this.products = res.data;
                console.log(this.products);
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

}
