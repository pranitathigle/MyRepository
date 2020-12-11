import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

export interface Message {
   type: string;
   payload: any;
}

export type MessageCallback = (payload: any) => void ;
@Injectable({
    providedIn: 'root'
})

export class EventAggregratorService {
  private handler = new Subject<Message>();
  constructor() {}
  broadcast(type: string, payload: any){
    this.handler.next({type, payload});
  }


  subscribe(type: string, callback: MessageCallback): Subscription {
      return this.handler.pipe(
          filter (message => message.type === type),
          map(message => message.payload)
      ).subscribe(callback);

  }
}
