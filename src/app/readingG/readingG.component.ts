
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
 selector: 'app-readingg',
 templateUrl: './readingG.component.html',
 styleUrls: ['./font/css/all.min.css']
})

export class ReadingGComponent implements OnInit {

SVille = null;
myData: any[] = [];
private jsonURL = 'assets/villes.json';

 constructor(private http: HttpClient) {
   this.getJSON().subscribe(data => {
    this.myData = data;
   });
 } // constructor


 @Output() messageVilles = new EventEmitter<string>();

 onch(message: string) {
  this.messageVilles.emit(message);
 }

 public getJSON(): Observable<any> {
   return this.http.get(this.jsonURL);
 }

 ngOnInit(): void {

} // ngoninit
} // class
