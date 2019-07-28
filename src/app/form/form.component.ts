import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css', './font/css/all.min.css']
})

export class FormComponent {

    defaultG = 'Mr';




private model: any = {};

public show = false;
public buttonName: any = 'Show';


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
