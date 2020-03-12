import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import
{
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core'

const { PushNotifications, Modals } = Plugins

import { FCM } from "capacitor-fcm";
const fcm = new FCM();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  userID: string;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Inventario',
      url: '/lot-list',
      icon: 'filing'
    },
    {
      title: 'Pedidos',
      url: '/order-list',
      icon: 'cart'
    },
    {
      title: 'Clientes',
      url: '/wholesaler-list',
      icon: 'contacts'
    },
    {
      title: 'Insumos',
      url: '/supply-list',
      icon: 'nutrition'
    },
    {
      title: 'Domicilios',
      url: '/',
      icon: 'car'
    },
    {
      title: 'Estadísticas',
      url: '/stats-list',
      icon: 'stats'
    },
    {
      title: 'Usuarios',
      url: '/',
      icon: 'people'
    },
    {
      title: 'Configuración',
      url: '/settings-index',
      icon: 'settings'
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
      this.userID = null;
    });
  }

  ngOnInit()
  {
    console.log('Initializing HomePage');
    this.initializePushNotifications();
  }
  
  initializePushNotifications()
  {
    
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    

    // On succcess, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        //alert('Push registration success, token: ' + token.value);
        console.log('Push registration success, token: ' + token.value);

        fcm
          .subscribeTo({ topic: "test" })
          .then(r => 
            {
              //alert('subscribed to topic')

            }
            )
          .catch(err => console.log(err));

          
        fcm
        .subscribeTo({ topic: "dev" })
        .then(r =>
           //alert('subscribed to topic dev')
           console.log('subscribed to topic dev')
           )
        .catch(err => console.log(err));
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        var audio1 = new Audio('assets/audio.mp3');
        console.log('Audio');
        audio1.play();
        // alert('Push received: ' + JSON.stringify(notification));
        console.log('Push received: ', notification);

        let alertRet = Modals.alert({
          title: notification.title,
          message: notification.body
        });

      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
        console.log('Push action performed: ' + notification);
      }
    );
  }
}
