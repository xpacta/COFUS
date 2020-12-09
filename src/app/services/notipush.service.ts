import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotipushService {

  constructor( private oneSignal: OneSignal ) { }

  configuracionInicial(){
    this.oneSignal.startInit('16c3444a-0a44-4e6a-9999-8a4e7a128c09', '832597217989');

 
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    

    this.oneSignal.handleNotificationReceived().subscribe(( notificacion ) => {
    // do something when notification is received
    console.log(notificacion);
    });

    this.oneSignal.handleNotificationOpened().subscribe(( notificacion ) => {
    // do something when a notification is opened
    console.log(notificacion);
    });

    this.oneSignal.endInit();
    }
    }
