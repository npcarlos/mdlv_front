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

  async getCustomers() {
    /*
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
      */
  }
  async crearOrden()
  {
    /*
    var esValido = true;
    var errores = [];
    if(this.customer == undefined)
    {
      errores.push('Debe seleccionar un cliente');
      esValido = false;
    }
    
    
    if(this.presentationsForm.getPresentationRequest().length == 0)
    {
      errores.push('Debe seleccionar al menos una presentación');
      esValido = false;
    }
    
    
    if( esValido )
    {

     var pedidoFinal = "<h2>" + this.customer.name + "</h2>";
     
     var producto = "";
      this.presentationsForm.getPresentationRequest().forEach(element => {
        if(producto != element.product){
          if(producto != "")
          {
            pedidoFinal +=" </ul>";
          }
          producto = element.product;
          pedidoFinal += "<h3>" + producto + "</h3>";
          pedidoFinal +=" <ul>";
        }
        pedidoFinal += "<li><b>"+element.label + ":</b><br>" + element.requested_quantity + " unidades</li>";
      });
      pedidoFinal += "</ul>";
      const alert = await this.alertController.create({
        header: 'Confirmar orden a',
        message: pedidoFinal,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Confirmar',
            handler: () => {
              
              var request = {
                customer:this.customer.uuid,
                seller:1,
                cart: this.presentationsForm.getPresentationRequest()
               };
               
               console.log(JSON.stringify(request));
               
              
              this.api.post("orders", request)
                .subscribe(res => {
                  console.log(JSON.stringify(res));
                  if (res.success) {
                      this.toastService.presentToast("Pedido creado exitosamente");
                      this.router.navigate(['/order-list']);
                  }
                  else {
                    console.log(res);
                  }
                }, err => {
                  console.log(err);
                });
                
            }
          }
        ]
      });

      await alert.present();
  
      
    }
    else
    {
      var error = "<ul>";
      errores.forEach(element => {
        error += "<li>"+element+"</li>";
      });
      error += "</ul>";
      
      const alert = await this.alertController.create({
        header: 'Nueva orden de compra',
        subHeader: '',
        message: error,
        buttons: ['OK']
      });
      await alert.present();
    }
    */
  }
}
