import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/api/services/rest-api.service';

@Component({
  selector: 'app-presentation-form',
  templateUrl: './presentation-form.component.html',
  styleUrls: ['./presentation-form.component.scss'],
})
export class PresentationFormComponent implements OnInit {

  
  private endPoint: string = "products";
  
  private products: any;

  private pedidos: any;
  
  
  constructor(
    public api: RestApiService
  ) { }

  ngOnInit() {
    this.pedidos = [];
    this.products = [];
    this.getProducts();
  }
  
  async getProducts() 
  {

    await this.api.get(this.endPoint)
      .subscribe(res => {
        console.log(res);
        if (res.success) {
          this.products = res.data;

          this.pedidos = [];
          for (var i = 0; i < this.products.length; i++) {
            var presentations = [];
            for (var j = 0; j < this.products[i].presentations.length; j++) {
              var presentation = this.products[i].presentations[j];
              var element = { 
                  presentation: presentation.uuid,
                  requested_quantity: "",
                  wholesale_price: presentation.wholesale_price,
                  retail_price: presentation.retail_price,
                  label: presentation.short_name + " (" + presentation.measurement +")",
                  product: this.products[i].name
                 };
              presentations.push(element);
            }
            this.pedidos.push({ presentations: presentations });
          }
        }
        else {
          console.log(res);
        }
        //loading.dismiss();
      }, err => {
        console.log(err);
        //loading.dismiss();
      });
  
  }
  
  getPresentationRequest()
  {
    var request = [];
    for (var i = 0; i < this.pedidos.length; i++) {
      var element = this.pedidos[i];
      for (var j = 0; j < element.presentations.length; j++) {
        var p = element.presentations[j];
        if (p.requested_quantity > 0) {
          request.push(p);
        }
      }
    }
    return request;
  }

  getTotalPrice()
  {
    var items = this.getPresentationRequest();
    //console.log(JSON.stringify(items));
    var totalPrice = 0;
    for(var i = 0; i < items.length; i++)
    {
      var quantity = items[i]['requested_quantity'];
      var singlePrice = items[i]['wholesale_price'];
      totalPrice += quantity * singlePrice;
    }

    return totalPrice;
  }
}
