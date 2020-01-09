import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { PrelotRequestService } from 'src/app/api/services/models/prelot-request.service';

import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Modals } = Plugins;

@Component({
  selector: 'app-prelot-request-details',
  templateUrl: './prelot-request-details.page.html',
  styleUrls: ['./prelot-request-details.page.scss'],
})
export class PrelotRequestDetailsPage implements OnInit {


  private prelotRequest:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public api: RestApiService,
    public prelotRequestService: PrelotRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    let requestInfo = this.activatedRoute.snapshot.paramMap.get('request');
    if( requestInfo != null &&  requestInfo != undefined && requestInfo != "")
    {
      this.prelotRequest = JSON.parse(requestInfo);
    }
    else{
      console.log("No hay nada");
    }
  }

  cambiarEstadoPrelotSolicitar()
  {
    this.prelotRequestService.cambiarEstadoPrelotSolicitar(this.prelotRequest).then(data =>{
      this.router.navigate(['/prelot-request-list']);
    });
  }

  cambiarEstadoPrelotSolicitarYEmpacar()
  {
    this.prelotRequestService.cambiarEstadoPrelotSolicitarYEmpacar(this.prelotRequest).then(data =>{
      this.router.navigate(['/prelot-request-list']);
    });
  }

  async eliminarPrelot()
  {
    let alertRet = await Modals.alert({
      title: 'Error',
      message: "No implementado aún"
    });
  }
}
