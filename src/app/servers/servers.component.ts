import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',          // balise html
  // selector: '[app-servers]'       by attribute
  // selector: '.app-servers'       by class
  template: `
<!--input type='text' (change)="sendMessageToParent(messageToSendC)" [(ngModel)]="messageToSendC"-->
<select [(ngModel)]="messageToSendC" (change)="sendMessageToParent(messageToSendC)">
<option value="un">1</option>
<option value="deux">2</option>
<option value="trois">3</option>
<option value="quatre">4</option>
</select>
<select [(ngModel)]="messageToSend" (change)="sendMessage(messageToSend)">
<option value="un">1</option>
<option value="deux">2</option>
<option value="trois">3</option>
<option value="quatre">4</option>
</select>
 `,
  //  <p>{{model.name || 'user'}}</p>
})
export class ServersComponent implements OnInit {

  @Output() messageToEmit = new EventEmitter<string>();
  @Output() messageEmitted = new EventEmitter<string>();

  messageToSendC: string;
  messageToSend: string;


  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message);
  }
  sendMessage(message: string) {
    this.messageEmitted.emit(message);
  }

}
