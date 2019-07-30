
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
 selector: 'app-reading',
 templateUrl: './reading.component.html',
 styleUrls: ['./font/css/all.min.css']
})

export class ReadingComponent implements OnInit {

@Input() SVille = null;
@Input() SDel = null;
@Input() SLoc = null;
@Input() SCop = null;

/*SVille = this.SV;
SDel = this.SD;
SLoc = this.SL;
SCop = this.SC;*/


myData: any[] = [];
@Input() meinData: any[] = [];
private jsonURL = 'assets/villes.json';

 constructor(private http: HttpClient) {
   this.getJSON().subscribe(data => {
    this.myData = data;
   });
 } // constructor


 @Output() messageVille = new EventEmitter<string>();
 @Output() messageDel = new EventEmitter<string>();
 @Output() messageLoc = new EventEmitter<string>();
 @Output() messageCop = new EventEmitter<string>();

 onchV(message: string) {
  this.meinData = this.myData.map(element => {
    if (element.ville == this.SVille) {
        this.messageVille.emit(message);
        return {
    ville: element.ville,
    delegation: element.delegation,
    localite: element.localite,
    code_postal: element.code_postal
    };
  }
    });
  this.meinData = this.meinData.filter(el => {
    return el != null;
  });
 }

 onchD(message: string) {
  this.meinData = this.myData.map(element => {
    if (element.ville == this.SVille && element.delegation == this.SDel) {
        this.messageDel.emit(message);
        return {
    ville: element.ville,
    delegation: element.delegation,
    localite: element.localite,
    code_postal: element.code_postal
    };
  }
    });
  this.meinData = this.meinData.filter(el => {
    return el != null;
  });
 }

 onchL(message: string) {
  this.meinData = this.myData.map(element => {
    if (element.ville == this.SVille && element.delegation == this.SDel && element.localite == this.SLoc) {
        this.messageLoc.emit(message);
        return {
    ville: element.ville,
    delegation: element.delegation,
    localite: element.localite,
    code_postal: element.code_postal
    };
  }
    });
  this.meinData = this.meinData.filter(el => {
    return el != null;
  });
 }

 onchC(message: string) {
    this.messageCop.emit(message);
 }

 public getJSON(): Observable<any> {
   return this.http.get(this.jsonURL);
 }

 ngOnInit(): void {

  $('#deldiv').hide();
  $('#locdiv').hide();
  $('#copdiv').hide();

  $('#vil').click(function() {
  $('#deldiv').show();
  });

  $('#del').click(function() {
  $('#locdiv').show();
  });

  $('#loc').click(function() {
  $('#copdiv').show();
  });


} // ngoninit
} // class
