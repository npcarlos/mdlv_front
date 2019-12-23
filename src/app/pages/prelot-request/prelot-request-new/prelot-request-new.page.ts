import { Component, ViewChild, OnInit } from '@angular/core';
import { PresentationFormComponent } from '../../../shared/presentation-form/presentation-form.component'
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'app-prelot-request-new',
  templateUrl: './prelot-request-new.page.html',
  styleUrls: ['./prelot-request-new.page.scss'],
})
export class PrelotRequestNewPage implements OnInit {

  private endPoint:string = "prelot_requests";
  
  @ViewChild(PresentationFormComponent, {static: false}) presentationsForm: PresentationFormComponent;

  private comments: string;

  constructor(
    public api: RestApiService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  async solicitarEmpaque()
  {
    var esValido = true;
    var errores = [];

    let itemsPedidos = this.presentationsForm.getPresentationRequest();

    if(itemsPedidos.length == 0)
    {
      errores.push('Debe seleccionar al menos una presentación');
      esValido = false;
    }

    if(esValido)
    {
      var pedidoFinal = "";
     
     var producto = "";
     
      itemsPedidos.forEach(element => {
        if(producto != element.product){
          if(producto != "")
          {
            pedidoFinal +="\n\n";
          }
          producto = element.product;
          pedidoFinal += producto;
          pedidoFinal +=" \n";
        }
        pedidoFinal += ""+element.label + ": " + element.requested_quantity + " unidades\n";
      });
      

      let confirmRet = await Modals.confirm({
        title: 'Corfirmar orden',
        message: pedidoFinal
      });
      if( confirmRet.value)
      {
        console.log("enviar peticiión");
        this.enviarOrden(itemsPedidos);
      }
    }
    else
    {
      var error = "";
      errores.forEach(element => {
        error += element+"\n";
      });

      let alertRet = await Modals.alert({
        title: 'Error',
        message: error
      });
    }
  }

  async enviarOrden(pedido) {
    
    var request = {
      administrator_id:1,
      cart: pedido,
      comments: (this.comments == undefined || this.comments == "") ? null : this.comments,
     };
     
     console.log(JSON.stringify(request));
     
    
     this.api.post(this.endPoint + "/group", request)
     .subscribe(res => {
       console.log(JSON.stringify(res));
       if (res.success) {
           this.router.navigate(['/prelot-request-list']);
       }
       else {
         console.log(res);
       }
     }, err => {
       console.log(err);
     });

 }
}
