import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/api/services/models/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-forecast',
  templateUrl: './product-forecast.page.html',
  styleUrls: ['./product-forecast.page.scss'],
})
export class ProductForecastPage implements OnInit {

  forecast: any;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
  }


  ionViewDidEnter()
  {
    this.productService.getForecast().then(forecast => {
        this.forecast = forecast;
        //console.log(Object.keys(this.forecast).length);
        console.log(this.forecast.length);
    });
  }
}
