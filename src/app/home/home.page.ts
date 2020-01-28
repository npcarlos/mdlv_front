import { Component } from '@angular/core';
import { environment, VERSION } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  version: string;
  constructor(

  ) {
    this.version = "Ninguna";
  }

  ionViewDidEnter()
  {
    this.version = VERSION;
  }
}
