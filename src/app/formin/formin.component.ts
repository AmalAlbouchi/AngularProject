import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
    selector: 'app-formin',
    templateUrl: './formin.component.html',
    styleUrls: ['./formin.component.css', './font/css/all.min.css']
})

export class ForminComponent implements OnInit {

    @Input() model: any;
    g1 = 'Monsieur';
    g2 = 'Monsieur';

public show = false;
public conf = true;
public home = false;

receivedVilles: string;
receivedVille: string;
receivedDel: string;
receivedLoc: string;
receivedCop: string;

messageToSendP: any;
mData: any[];

getVilles(message: string) {
  this.receivedVilles = message;
}
getVille(message: string) {
  this.receivedVille = message;
}
getDel(message: string) {
  this.receivedDel = message;
}
getLoc(message: string) {
  this.receivedLoc = message;
}
getCop(message: string) {
  this.receivedCop = message;
}


gohome() {
    this.home = true;
}

confirm() {
    this.conf = false;
}
return() {
    this.show = false;
}
valid() {
    this.show = true;
}


onSubmit(form: NgForm) {
    console.log(form);
}

/*
hideAll() {
  $('#deldiv').hide();
  $('#locdiv').hide();
  $('#copdiv').hide();
  this.receivedVilles = null;
  this.receivedVille = null;
  this.receivedDel = null;
  this.receivedLoc = null;
  this.receivedCop = null;
  this.messageToSendP = null;
  this.mData = [];

}*/


ngOnInit(): void {
this.messageToSendP = null;
}

}
