import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/api/services/models/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wholesaler-details',
  templateUrl: './wholesaler-details.page.html',
  styleUrls: ['./wholesaler-details.page.scss'],
})
export class WholesalerDetailsPage implements OnInit {
  
  wholesaler: any;
  idWholesaler: any;
  totalValue: any;
  

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.idWholesaler = this.activatedRoute.snapshot.paramMap.get('wholesaler');

    this.customerService.getWholesaler(this.idWholesaler).then(data =>
      {
        this.wholesaler = data;

        
        this.totalValue = 0;

        this.wholesaler.difference_days_between_orders = 0;

        this.wholesaler.products = [];

        for(let i = 0; i < this.wholesaler.orders.length; i++)
        {
           let currentOrder = this.wholesaler.orders[i];
           this.totalValue += currentOrder.total_wholesale_price;

          
           for(let posItem = 0; posItem < currentOrder.order_items.length; posItem++) 
           {
              let item = currentOrder.order_items[posItem];

              let currentPresentation = item.presentation;
              let currentProduct = item.presentation.product;

              
              // Check if the product was already counted 
              let foundProduct = null;
              for(let posProduct = 0; posProduct < this.wholesaler.products.length; posProduct++) {
                  if (this.wholesaler.products[posProduct].name == currentProduct.name) {
                    foundProduct = this.wholesaler.products[posProduct];
                      break;
                  }
              }

              if(foundProduct == null)
              {
                //currentProduct.presentations = [];
                foundProduct = currentProduct;
                foundProduct.presentations = [];
                this.wholesaler.products.push(currentProduct);
                //this.wholesaler.products[this.wholesaler.products.length - 1]
              }

              
              // Check if the presentation was already counted 
              let foundPresentation = null;
              for(let posPresentation = 0; posPresentation < foundProduct.presentations.length; posPresentation++) {
                  if (foundProduct.presentations[posPresentation].uuid == item.presentation.uuid) {
                    foundPresentation = foundProduct.presentations[posPresentation];
                      break;
                  }
              }
              
              if(foundPresentation == null)
              {
                foundPresentation = {
                  uuid: currentPresentation.uuid,
                  slug: currentPresentation.slug,
                  short_name: currentPresentation.short_name,
                  formal_name: currentPresentation.formal_name,
                  measurement: currentPresentation.measurement,
                  image: currentPresentation.image,
                  quantity: 0
                };

                foundProduct.presentations.push(foundPresentation);
              }
              
              foundPresentation.quantity += item.quantity;
              

          }

           // Calculate the difference between days
           currentOrder.diffDays = 0;

           if(i < this.wholesaler.orders.length - 1)
           {
              let date1 = new Date( currentOrder.created_at );
              let date2 = new Date( this.wholesaler.orders[ i + 1 ].created_at );
              
              let Difference_In_Time = date1.getTime() - date2.getTime(); 
  
              // To calculate the no. of days between two dates 
              let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

              currentOrder.diffDays = Difference_In_Days;

              this.wholesaler.difference_days_between_orders += currentOrder.diffDays;

           }

           
        }

        if(this.wholesaler.orders.length > 1)
        {
          this.wholesaler.difference_days_between_orders /= (this.wholesaler.orders.length - 1);
        }
        console.log(JSON.stringify(this.wholesaler));
      }
    );
  }
}
