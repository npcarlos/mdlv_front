import { Injectable } from '@angular/core';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { PushNotificationsService } from 'src/app/api/services/push-notifications.service';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endPoint:string = "people";

  
  constructor(
    public api: RestApiService,
    private pushNotificationService: PushNotificationsService
  )
  {

  }

  async getCurrentUser()
  {
    //let currentUser = await Storage.get({key: 'currentUser'});
    let currentUser = Storage.get({key: 'currentUser'});
    return currentUser;
  }
  async setCurrentUser(idNewUser)
  {
    return new Promise(resolve=>{
      this.getUser(idNewUser).then(data =>
        {
          Storage.set({key:'currentUser', value: JSON.stringify(data)});
          data["roles"].forEach(role => {
            role['topics'].forEach(topic => {
              console.log(topic);
              this.pushNotificationService.suscribeToATopic(topic);
              
            });
          });
          resolve(data);
        }
      );
  })

    
  }

  getUsers() {
    return new Promise(resolve=>{
          this.api.get(this.endPoint)
          //.take(1) //useful if you need the data once and don't want to manually cancel the subscription again
          .subscribe(
              (data:any) => {
                  if(data.success)
                  {
                    resolve(data.data);
                  }
          })
      })
    
  }

 
 async getUser(idUser) {

    return new Promise(resolve=>{
      
      this.api.get(this.endPoint + "/" + idUser)
      .subscribe(res => {
        console.log(res);
        if(res.success)
        {
            resolve(res.data);
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
    });
  }

}
