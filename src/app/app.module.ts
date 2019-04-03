import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    HeaderComponent,
    ContactsComponent,
    HomeComponent,
    FooterComponent,
    AccordionComponent,
    LoginFormComponent,
    AdminPageComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxAudioPlayerModule,
    Angular2ImageGalleryModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
