import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',          // balise html
  // selector: '[app-servers]'       by attribute
  // selector: '.app-servers'       by class
  template: `
  <textarea #textarea [(ngModel)]="name" (ngModelChange)="nameChange.emit($event)" ngControl="name" name="name"></textarea>
  `,
  //  <p>{{model.name || 'user'}}</p>
})
export class ServersComponent {
 // @Input() model: any;
 @Input() public name: string = 'test';
 @Output() public nameChange: EventEmitter<String> = new EventEmitter<String>();


}
