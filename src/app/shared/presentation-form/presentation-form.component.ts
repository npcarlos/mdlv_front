import { Component, OnInit } from '@angular/core';

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
    this.getProducts();
  }
  
  async getProducts() {
/*
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
      */
      
      var productosJSON = '{"success":true,"data":[{"uuid":"42e91806-3e9b-4cee-87db-01f7005a8d1d","name":"Miel","description":"Miel natural","image":"miel.png","slug":"miel","presentations":[{"uuid":"bf7f6210-4f6a-4344-9582-15af6186116c","slug":"bolita","short_name":"Bolita","formal_name":"Miel peque\u00f1a","measurement_quantity":250,"measurement_unit_id":2,"wholesale_price":7000,"retail_price":10000,"minimum_stock_quantity":10,"iva":0,"image":"bolita.png","measurement":"250 ml","measurement_unit":{"uuid":"5b4fcced-7f81-41ed-9a70-76a8b918883c","name":"Mililitro","abreviation":"ml"}},{"uuid":"3e31bc60-540b-4555-97af-e6666d78520f","slug":"mediana","short_name":"Mediana","formal_name":"Miel mediana","measurement_quantity":500,"measurement_unit_id":2,"wholesale_price":14000,"retail_price":18000,"minimum_stock_quantity":5,"iva":0,"image":"mediana.png","measurement":"500 ml","measurement_unit":{"uuid":"5b4fcced-7f81-41ed-9a70-76a8b918883c","name":"Mililitro","abreviation":"ml"}},{"uuid":"38a18899-9346-41e3-9e54-1fa440c29cee","slug":"grande","short_name":"Grande","formal_name":"Miel grande","measurement_quantity":1000,"measurement_unit_id":2,"wholesale_price":28000,"retail_price":35000,"minimum_stock_quantity":0,"iva":0,"image":"grande.png","measurement":"1000 ml","measurement_unit":{"uuid":"5b4fcced-7f81-41ed-9a70-76a8b918883c","name":"Mililitro","abreviation":"ml"}}]},{"uuid":"93f4ef66-949b-4ba9-a348-745d46518fa0","name":"Polen","description":"Polen extra\u00eddo de flores","image":"polen.png","slug":"polen","presentations":[{"uuid":"597f0c7b-d5f9-4028-b78d-2d87b1568780","slug":"polen","short_name":"Polen","formal_name":"Polen","measurement_quantity":120,"measurement_unit_id":2,"wholesale_price":9000,"retail_price":12000,"minimum_stock_quantity":4,"iva":0,"image":"polen.png","measurement":"120 ml","measurement_unit":{"uuid":"5b4fcced-7f81-41ed-9a70-76a8b918883c","name":"Mililitro","abreviation":"ml"}}]},{"uuid":"c83b8420-cd67-4815-83df-428b3e83a4b4","name":"Prop\u00f3leo","description":"Miel con prop\u00f3leo","image":"mielpropoleo.png","slug":"prop\u00f3leo","presentations":[{"uuid":"fefc202b-7bbe-4419-b3d8-2665dc8bf122","slug":"prop\u00f3leo","short_name":"Prop\u00f3leo","formal_name":"Prop\u00f3leo","measurement_quantity":250,"measurement_unit_id":2,"wholesale_price":14000,"retail_price":18000,"minimum_stock_quantity":5,"iva":19,"image":"prop\u00f3leo.png","measurement":"250 ml","measurement_unit":{"uuid":"5b4fcced-7f81-41ed-9a70-76a8b918883c","name":"Mililitro","abreviation":"ml"}}]},{"uuid":"9230144f-4a6f-4538-9d5c-abb19d584ea3","name":"Cera","description":"Cera de abejas","image":"cera.png","slug":"cera","presentations":[]}],"message":"Products retrieved successfully"}';
      
      this.products = productosJSON;

          this.pedidos = [];
          for (var i = 0; i < this.products.length; i++) {
            var presentations = [];
            for (var j = 0; j < this.products[i].presentations.length; j++) {
              var presentation = this.products[i].presentations[j];
              var element = { 
                  presentation: presentation.uuid,
                  requested_quantity: 0,
                  label: presentation.short_name + " (" + presentation.measurement +")",
                  product: this.products[i].name
                 };
              presentations.push(element);
            }
            this.pedidos.push({ presentations: presentations });
      
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
}
