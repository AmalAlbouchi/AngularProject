import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-result',
  template: `
<div *ngIf="showMePartially">
  <h1>Vos Information</h1>
  <p>{{model.name || 'user'}}</p>
</div>
 `
})
export class ResultComponent extends Input {
  @Input() showMePartially: boolean;
  @Input() model: any;
}
