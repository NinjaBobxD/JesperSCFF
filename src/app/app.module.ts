import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';

import { routing } from './app.routing';

import { ContactService } from './_services/contact.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoachingComponent } from './coaching/coaching.component';
import { MotivationComponent } from './motivation/motivation.component';
import { VideoComponent } from './video/video.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachingComponent,
    MotivationComponent,
    VideoComponent,
    WorkshopComponent,
    AdminComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot()
  ],
  providers: [
    ContactService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
