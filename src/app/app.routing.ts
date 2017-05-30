import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { LoginComponent } from './login/login.component';
import { CoachingComponent } from './coaching/coaching.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HomeComponent } from './home/home.component';
import { MotivationComponent } from './motivation/motivation.component';
import { VideoComponent } from './video/video.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coaching', component: CoachingComponent} ,
  { path: 'contact', component: ContactComponent },
  { path: 'contact-details/:id', component: ContactDetailComponent },
  { path: 'contact-create', component: ContactCreateComponent },
  { path: 'motivation', component: MotivationComponent },
  { path: 'videos', component: VideoComponent },
  { path: 'workshops', component: WorkshopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

export const routing = RouterModule.forRoot(routes);
