import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-server',
  template: `
	<form (ngSubmit)="onSubmit()" #testform="ngForm">
	  {{name}}
<app-servers></app-servers>
		<button type="submit">Go</button>
	</form>


  `,
 //  <input [(ngModel)]="model.name" placeholder="First Name">
})
export class ServerComponent   {
  // @Input() model: any;
  @Input() public name: string = 'test';
 }
