import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Order details',
      url: '/order-details',
      icon: 'cart'
    },
    {
      title: 'Empaque',
      url: '/',
      icon: 'filing'
    },
    {
      title: 'Pedidos',
      url: '/order-list',
      icon: 'cart'
    },
    {
      title: 'Clientes',
      url: '/',
      icon: 'contacts'
    },
    {
      title: 'Insumos',
      url: '/',
      icon: 'contacts'
    },
    {
      title: 'Domicilios',
      url: '/',
      icon: 'car'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
