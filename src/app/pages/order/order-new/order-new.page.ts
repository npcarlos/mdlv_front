import { Component, OnInit, ViewChild } from '@angular/core';
import { PresentationFormComponent } from '../../../shared/presentation-form/presentation-form.component'
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.page.html',
  styleUrls: ['./order-new.page.scss'],
})
export class OrderNewPage implements OnInit {
 
  @ViewChild(PresentationFormComponent, {static: false}) presentationsForm: PresentationFormComponent;

  private endPoint:string = "orders";
  
  private customers: any;
  
  private customer: any;
  
  private resultado: any;

  private public_comments: string;

  private private_comments: string;
  
  private fechaMinima: string;

  private planned_delivery_date: string;

  
  constructor(
    //private alertController: AlertController,
    public api: RestApiService,
    private router: Router//,
    //public toastService: ToastService)
  )
  {

  }

  ngOnInit() {
    this.getCustomers();
  }

  ionViewDidEnter()
  {
    this.fechaMinima = new Date().toISOString();
  }

  async getCustomers() {
    
     await this.api.get('customers')
      .subscribe(res => {
        console.log(res);
        if(res.success)
        {
          this.customers = res.data;
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

  
  async enviarOrden(pedido) {
    
    var request = {
      customer_id:this.customer.uuid,
      seller_id:1,
      cart: pedido,
      public_comments: this.public_comments,
      private_comments: this.private_comments,
     };
     
     console.log(JSON.stringify(request));
     
    
    this.api.post("orders", request)
      .subscribe(res => {
        console.log(JSON.stringify(res));
        if (res.success) {
            this.router.navigate(['/order-list']);
        }
        else {
          console.log(res);
        }
      }, err => {
        console.log(err);
      });
 }
  async crearOrden()
  {
    var esValido = true;
    var errores = [];

    if(this.customer == undefined)
    {
      errores.push('Debe seleccionar un cliente');
      esValido = false;
    }

    let itemsPedidos = this.presentationsForm.getPresentationRequest();

    if(itemsPedidos.length == 0)
    {
      errores.push('Debe seleccionar al menos una presentación');
      esValido = false;
    }

    if(esValido)
    {
      var pedidoFinal = this.customer.name + "\n\n";
     
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

}
