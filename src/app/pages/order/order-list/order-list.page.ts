import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {


  private orders: any;
  private originalOrders: any;
  
  constructor() { }

  ngOnInit() {
    
    let jsonString = '[{"uuid":"5ace5f1e-527e-4cdb-8535-94e7153dcbb8","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-01-07 22:01:24","customer":{"uuid":"7d1266aa-4157-44bb-9f66-20ee768bbd85","name":"Domicilios.com","document_type_id":7,"document_number":"7997955949-5","address":"Calle 92 # 15 - 73","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"2583697","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"domicilioscom","image":null}},{"uuid":"80dd4396-d907-4925-8f02-d07be1319827","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-01-07 22:16:50","customer":{"uuid":"30f93a45-8e6f-49db-9445-51651538a58f","name":"Cigarrer\u00eda de barrio","document_type_id":7,"document_number":"32164798-5","address":"Calle 53 # 24 -05","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"7654321","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"cigarrer\u00eda-de-barrio","image":null}},{"uuid":"425170b7-f143-41e0-b946-2ef33b70ec98","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-01-07 22:31:31","customer":{"uuid":"c3fe8bda-64d7-4b7c-a258-bd3fd884c121","name":"Comprador 1","document_type_id":1,"document_number":"23985789","address":"Carrera 26 # 63 - 58","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"1324567","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"comprador-1","image":null}},{"uuid":"a0eb87ae-677b-4836-ad21-f46ce5e2c204","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-01-07 22:54:56","customer":{"uuid":"7d1266aa-4157-44bb-9f66-20ee768bbd85","name":"Domicilios.com","document_type_id":7,"document_number":"7997955949-5","address":"Calle 92 # 15 - 73","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"2583697","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"domicilioscom","image":null}},{"uuid":"42ef8823-5b35-4a29-b162-b1d0d443096d","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-01-07 22:55:23","customer":{"uuid":"7d1266aa-4157-44bb-9f66-20ee768bbd85","name":"Domicilios.com","document_type_id":7,"document_number":"7997955949-5","address":"Calle 92 # 15 - 73","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"2583697","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"domicilioscom","image":null}},{"uuid":"fb38d84e-33c6-4486-8eea-ee2abb7d9471","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-01-07 22:56:17","customer":{"uuid":"30f93a45-8e6f-49db-9445-51651538a58f","name":"Cigarrer\u00eda de barrio","document_type_id":7,"document_number":"32164798-5","address":"Calle 53 # 24 -05","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"7654321","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"cigarrer\u00eda-de-barrio","image":null}},{"uuid":"f6530b47-5511-4fd5-92c8-df46e3e2a60f","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-04-11 14:08:45","customer":{"uuid":"30f93a45-8e6f-49db-9445-51651538a58f","name":"Cigarrer\u00eda de barrio","document_type_id":7,"document_number":"32164798-5","address":"Calle 53 # 24 -05","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"7654321","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"cigarrer\u00eda-de-barrio","image":null}},{"uuid":"58d577c0-4ccf-4b7e-9180-b001f5e63a3f","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-08-03 23:31:38","customer":{"uuid":"c3fe8bda-64d7-4b7c-a258-bd3fd884c121","name":"Comprador 1","document_type_id":1,"document_number":"23985789","address":"Carrera 26 # 63 - 58","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"1324567","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"comprador-1","image":null}},{"uuid":"172806b1-d352-4763-8de9-82c10b0ac332","planned_delivery_date":null,"delivery_date":null,"delivery_address_id":null,"comments":null,"created_at":"2019-09-05 20:06:29","customer":{"uuid":"30f93a45-8e6f-49db-9445-51651538a58f","name":"Cigarrer\u00eda de barrio","document_type_id":7,"document_number":"32164798-5","address":"Calle 53 # 24 -05","latitude":4.60970999999999975216269376687705516815185546875,"longitude":-74.08174999999999954525264911353588104248046875,"phone":"7654321","cellphone":null,"web":null,"facebook_id":null,"instagram_id":null,"slug":"cigarrer\u00eda-de-barrio","image":null}}]';
    
    this.orders = JSON.parse(jsonString);
    this.originalOrders = JSON.parse(jsonString);
    
  }

  filterData()
  {
      if(this.orders.length == this.originalOrders.length)
      {
          this.orders = this.orders.filter((order)=>{
            return order.customer.name.includes("ba");
          });
      }
      else
      {
        this.orders = JSON.parse(JSON.stringify(this.originalOrders));
      }
  }
}
