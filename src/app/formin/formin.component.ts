import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
    selector: 'app-formin',
    templateUrl: './formin.component.html',
    styleUrls: ['./formin.component.css', './font/css/all.min.css']
})

export class ForminComponent {
    @Input() model: any;
    g1 = 'Monsieur';
    g2 = 'Monsieur';

public show = false;
public conf = true;

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
}
