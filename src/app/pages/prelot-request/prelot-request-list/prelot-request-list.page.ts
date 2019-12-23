import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prelot-request-list',
  templateUrl: './prelot-request-list.page.html',
  styleUrls: ['./prelot-request-list.page.scss'],
})
export class PrelotRequestListPage implements OnInit {
 
  private endPoint:string = "prelot_requests";
  
  private prelotRequests: any;

  constructor(
    public api: RestApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRequests();
  }

  async getRequests() {
    
    await this.api.get(this.endPoint)
     .subscribe(res => {
       console.log(res);
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

 viewDetails(item)
 {
  this.router.navigate(['/prelot-request-details', {request: JSON.stringify(item)}]);
 }

 marcarComoEmpacado(item)
 {

 }
}
