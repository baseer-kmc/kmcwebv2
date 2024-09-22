import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RegisterComponent } from './pages/register/register.component';
import { MembersComponent } from './pages/members/members.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegisterConfirmationComponent } from './pages/register-confirmation/register-confirmation.component';
import { PreviouscommiteeComponent } from './pages/previouscommitee/previouscommitee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'members', component: MembersComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'register-confirm', component: RegisterConfirmationComponent },
  { path: 'prev-committee', component: PreviouscommiteeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
