import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  template: `
    <b>Response from child : "{{ receivedChildMessage }}"</b><br>
    <b>Response from child : "{{ receivedMessage }}"</b> <br>
  <app-servers (messageToEmit)="getMessage($event)" (messageEmitted)="getMess($event)"></app-servers>
  `,
 //  <input [(ngModel)]="model.name" placeholder="First Name">
})
export class ServerComponent  implements OnInit   {

  receivedChildMessage: string;
  receivedMessage: string;

  constructor() { }

  ngOnInit() {
  }

  getMessage(message: string) {
    this.receivedChildMessage = message;
  }
  getMess(message: string) {
    this.receivedMessage = message;
  }



}
