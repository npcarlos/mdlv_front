import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.page.html',
  styleUrls: ['./order-new.page.scss'],
})
export class OrderNewPage implements OnInit {

  private customers: any;
  
  private customer: any;
  
  private resultado: any;
  
  constructor() { }

  ngOnInit() {
      this.customers = [];
  }

}
