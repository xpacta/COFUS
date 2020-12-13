import { EventEmitter, Injectable } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';


@Injectable({
  providedIn: 'root'
})
export class NotipushService {
  public mensajes: OSNotificationPayload[] = [];
  constructor( private oneSignal: OneSignal ) {
    this.cargarNotificaciones();
   }

   Listener = new EventEmitter<OSNotificationPayload>();

  configuracionInicial(){
    this.oneSignal.startInit('16c3444a-0a44-4e6a-9999-8a4e7a128c09', '832597217989');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe(( notificacion ) => {
    // do something when notification is received
    this.NotificacionRecivida(notificacion);
    console.log(notificacion);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async ( notificacion ) => {
    // do something when a notification is opened
    console.log(notificacion);
    this.NotificacionRecivida(notificacion.notification);
    });

    this.oneSignal.endInit();
    }
    NotificacionRecivida( notificacion: OSNotification ){
      const payload = notificacion.payload;
      const existeNotificacion = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID);
      if(!existeNotificacion){
        this.Listener.emit( payload );
        this.mensajes.unshift( payload );
        this.guardarMensajes();
      }
    }
    guardarMensajes(){
      localStorage.setItem('Notificaciones', JSON.stringify(this.mensajes) );
      this.Listener.emit();
    }

    async cargarNotificaciones(){
      if (localStorage.getItem('Notificaciones')){
      this.mensajes =  JSON.parse(await localStorage.getItem('Notificaciones'));
      }
      console.log('imprimiendo mensajes: ');
      console.log(this.mensajes);
    }

    contarNotificaciones(){
      let tempCount = 0;
      if ( localStorage.getItem('Unread') ){
        for ( let i = 0; i < this.mensajes.length; i++ ) {
          console.log(i);
          if (this.mensajes[i].additionalData.vista === false){
            tempCount++;
          }
        }
      }else{
        tempCount = 0;
      }
      return tempCount;
    }

    }
