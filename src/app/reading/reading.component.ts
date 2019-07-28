
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
 selector: 'app-reading',
 templateUrl: './reading.component.html',
 styleUrls: ['./font/css/all.min.css']
})

export class ReadingComponent implements OnInit {

SVille = null;
SDel = null;
SLoc = null;
myData: any[] = [];
meinData: any[] = [];
private jsonURL = 'assets/villes.json';

 constructor(private http: HttpClient) {
   this.getJSON().subscribe(data => {
    this.myData = data;
   });
 } // constructor

 onch(SVille: string) {
  this.meinData = this.myData.map(element => {
    if (element.ville == this.SVille && element.delegation == this.SDel && element.localite == this.SLoc
      || element.ville == this.SVille && element.delegation == this.SDel && this.SLoc == null
      || element.ville == this.SVille && this.SDel == null && this.SLoc == null) {
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

 public getJSON(): Observable<any> {
   return this.http.get(this.jsonURL);
 }

 ngOnInit(): void {

  $('#deldiv').hide();
  $('#locdiv').hide();
  $('#copdiv').hide();

  $('#vil').change(function() {
  $('#deldiv').show();
  });

  $('#del').change(function() {
  $('#locdiv').show();
  });

  $('#loc').change(function() {
  $('#copdiv').show();
  });


} // ngoninit
} // class
