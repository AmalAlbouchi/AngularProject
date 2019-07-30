import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormComponent } from './form/form.component';
import { ForminComponent } from './formin/formin.component';
import { HomeComponent } from './home/home.component';
import { ReadingComponent } from './reading/reading.component';
import { ResultComponent } from './result/result.component';
import { ReadingGComponent } from './readingG/readingG.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FormComponent,
    ForminComponent,
    HomeComponent,
    ReadingComponent,
    ResultComponent,
    ReadingGComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
