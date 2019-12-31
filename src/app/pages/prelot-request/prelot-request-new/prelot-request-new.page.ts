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

  
  @ViewChild(PresentationFormComponent, {static: false}) presentationsForm: PresentationFormComponent;

  private comments: string;

  private fechaMinima: string;

  private planned_packaging_date: string;

  constructor(
    public api: RestApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  ionViewDidEnter()
  {
    this.fechaMinima = new Date().toISOString();
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
        let resultado = this.enviarOrden(itemsPedidos, this.comments, this.planned_packaging_date);
        if (resultado)
        {
          this.router.navigate(['/prelot-request-list']);
        }
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

  
 async enviarOrden(pedido, comments, planned_packaging_date) {
  let resultado = false;
  var request = {
    administrator_id:1,
    cart: pedido,
    comments: (comments == undefined || comments == "") ? null : comments,
    planned_packaging_date: (planned_packaging_date == undefined || planned_packaging_date == "") ? null : planned_packaging_date,
  };
  
  
  
  this.api.post("prelot_requests/group", request)
  .subscribe(res => {
    if (res.success) {
        resultado = true;
        return resultado;
    }
    else {
      console.log(res);
      return resultado;
    }
  }, err => {
    console.log(err);
  });
  
}

}
