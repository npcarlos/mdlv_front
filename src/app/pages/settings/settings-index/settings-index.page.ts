import { Component, OnInit } from '@angular/core';
import { environment, VERSION, SERVER_URL } from '../../../../environments/environment';
import { RestApiService } from 'src/app/api/services/rest-api.service';
import { PushNotificationsService } from 'src/app/api/services/push-notifications.service';
import { UserService } from 'src/app/api/services/models/user.service';

@Component({
  selector: 'app-settings-index',
  templateUrl: './settings-index.page.html',
  styleUrls: ['./settings-index.page.scss'],
})
export class SettingsIndexPage implements OnInit {

  version: string;
  urlServ: string;
  valorURL: string;
  api: RestApiService;

  users: any;
  currentUser:any;
  

  constructor(
    api:RestApiService,
    private userService: UserService,
    private pushNotificationService: PushNotificationsService
  ) { 
    this.version = "Ninguna";
    this.urlServ = "---";
    this.valorURL = "---";
    
    this.api = api;
    this.userService = userService;
    this.currentUser = "nadie";
  }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    this.version = VERSION;
    if(this.version == 'Dev version')
    {
      this.urlServ = SERVER_URL;
    }
    this.userService.getUsers().then(data =>
      {
        this.users = data;
      }
    );
    this.getCurrentUser();
  }

  cambiarURL()
  {
    this.valorURL = this.urlServ;
    this.api.setApiURL(this.urlServ);
  }

  cambiarServidorReal()
  {
    this.urlServ = "http://www.vtry-on.com/mdlv-dev/public/api/";
    this.valorURL = this.urlServ;
    this.api.setApiURL(this.urlServ);
  }

  cambiarServidorPruebas()
  {
    this.urlServ = SERVER_URL;
    this.valorURL = this.urlServ;
    this.api.setApiURL(this.urlServ);
  }

  getCurrentUser()
  {
    
    this.userService.getCurrentUser().then(data =>
      {
        this.currentUser = JSON.parse(data.value);
        console.log("current", this.currentUser);
      }
    );
      
  }

  setCurrentUser($event)
  {
    let idNewUser = $event.target.value;
    this.userService.setCurrentUser(idNewUser).then(data =>
      {
        this.currentUser = data;
      });
  }

  unsucribeAll()
  {
    this.pushNotificationService.unsuscribeToATopic('admins');
    this.pushNotificationService.unsuscribeToATopic('deliverers');
    this.pushNotificationService.unsuscribeToATopic('sellers');
    this.pushNotificationService.unsuscribeToATopic('packagers');
  }
}
