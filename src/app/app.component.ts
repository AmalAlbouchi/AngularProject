import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /* styles: [`
  h3{
  color: green;
  }
   `]*/
})

export class AppComponent {
name: any;
  constructor() {
    this.name = 'Angular2';
  }

  private model: any = {};

  public show = false;
  public buttonName: any = 'Show';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }
}
