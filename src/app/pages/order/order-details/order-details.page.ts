import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  private currentOrder:any;
  
  constructor() { }

  ngOnInit() {
    let jsonData = '{"uuid": "fb38d84e-33c6-4486-8eea-ee2abb7d9471","planned_delivery_date": null,"delivery_date": null,"delivery_address_id": null,"comments": null,"created_at": "2019-01-07 22:56:17","customer": {"uuid": "30f93a45-8e6f-49db-9445-51651538a58f","name": "Cigarrería de barrio","document_type_id": 7,"document_number": "32164798-5","address": "Calle 53 # 24 -05","latitude": 4.60971,"longitude": -74.08175,"phone": "7654321","cellphone": null,"web": null,"facebook_id": null,"instagram_id": null,"slug": "cigarrería-de-barrio","image": null}}';
    
    this.currentOrder = JSON.parse(jsonData);
    
  }

}
