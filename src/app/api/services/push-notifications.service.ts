import { Injectable } from '@angular/core';

import { environment, SERVER_URL, PUSH_NOTIFICATION_PREFIX } from '../../../environments/environment';

import
{
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core'

const { PushNotifications, Modals, Storage } = Plugins

import { FCM } from "capacitor-fcm";
const fcm = new FCM();

@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {

  userToken: any;
  constructor() { 
    this.userToken = "Ninguno";
  }

  setUserToken(newToken)
  {
    this.userToken = newToken;
  }

  getUserToken()
  {
    return this.userToken;
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
              alert('subscribed to topic test')

            }
            )
          .catch(err => console.log(err));

          
        fcm
        .subscribeTo({ topic: "dev" })
        .then(r =>
          {
            alert('subscribed to topic dev');
            console.log('subscribed to topic dev');
          }
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

  suscribeToATopic(pTopic)
  {
    let topicName = PUSH_NOTIFICATION_PREFIX +  pTopic;
    fcm
      .subscribeTo({ topic: topicName })
      .then(r => 
        {
          alert('subscribed to topic: '+ topicName)

        }
        )
      .catch(err => 
        {
          console.log(err);
        });
  }

  unsuscribeToATopic(pTopic)
  {
    let topicName = PUSH_NOTIFICATION_PREFIX + pTopic;
    fcm
      .unsubscribeFrom({ topic: topicName })
      .then(r => 
        {
          alert('UNsubscribed to topic: '+ topicName)

        }
        )
      .catch(err => 
        {
          console.log(err);
          alert('ERROR UNsubscribed: '+ err);
        });
  }
}
