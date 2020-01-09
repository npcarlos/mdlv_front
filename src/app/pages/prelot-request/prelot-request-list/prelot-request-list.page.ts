import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { PrelotRequestService } from 'src/app/api/services/models/prelot-request.service';
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
    private router: Router,
    private prelotRequestService?: PrelotRequestService
  ) { }

  ngOnInit() {
  }
  
  ionViewDidEnter()
  {
   this.prelotRequestService.getRequests().then(data =>
      this.prelotRequests = data
    );
  }


 viewDetails(item)
 {
  this.router.navigate(['/prelot-request-details', {request: JSON.stringify(item)}]);
 }

 marcarComoEmpacado(item)
 {
  this.prelotRequestService.cambiarEstadoPrelotSolicitarYEmpacar(item).then(data =>{
    this.prelotRequestService.getRequests().then(dataR =>
      this.prelotRequests = dataR
    );
  });
 }
 
 agregarSolicitudEmpaque()
 {
   this.router.navigate(['/prelot-request-new']);
 }
}
