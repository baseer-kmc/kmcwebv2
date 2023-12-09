import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MembersComponent } from './pages/members/members.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RegisterConfirmationComponent } from './pages/register-confirmation/register-confirmation.component'; 



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    MembersComponent,
    RegisterComponent,
    NewsComponent,
    ContactUsComponent,
    RegisterConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
