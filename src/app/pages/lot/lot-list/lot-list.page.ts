import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.page.html',
  styleUrls: ['./lot-list.page.scss'],
})
export class LotListPage implements OnInit {

  private endPoint:string = "products";

  private products: any;

  private prelotRequests: any;

  private consultaAPI: string = "Nada";
  
  constructor(
    public api: RestApiService,
    private router: Router
    ) 
    {

    }

    ngOnInit() {
      this.consultaAPI = "init";
    }
    
    ionViewDidEnter()
    {
      this.getProducts();
      this.getPrelotRequests();
    }
    
      async getPrelotRequests() {
        await this.api.get("prelot_requests")
          .subscribe(res => {
            if(res.success)
            {
                this.prelotRequests = res.data;
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
      async getProducts() {
        this.consultaAPI = "get";
        await this.api.get(this.endPoint)
          .subscribe(res => {
            this.consultaAPI = res;
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

      verSolicitudesEmpaque()
      {
        console.log("Ver solicitudes de empaque")
        this.router.navigate(['/prelot-request-list']);
      }
      
      agregarSolicitudEmpaque()
      {
        this.router.navigate(['/prelot-request-new']);
      }
}
