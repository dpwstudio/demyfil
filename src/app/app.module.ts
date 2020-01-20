import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './screens/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocieteComponent } from './screens/societe/societe.component';
import { ContactComponent } from './screens/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParticuliersComponent } from './screens/particuliers/particuliers.component';
import { TransfertsComponent } from './screens/transferts/transferts.component';
import { TransportsComponent } from './screens/transports/transports.component';
import { GardeMeubleComponent } from './screens/garde-meuble/garde-meuble.component';
import { QualiteComponent } from './screens/qualite/qualite.component';
import { DevisComponent } from './screens/devis/devis.component';
import { MentionsLegalesComponent } from './screens/mentions-legales/mentions-legales.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    NavbarComponent,
    SocieteComponent,
    ContactComponent,
    FooterComponent,
    ParticuliersComponent,
    TransfertsComponent,
    TransportsComponent,
    GardeMeubleComponent,
    QualiteComponent,
    DevisComponent,
    MentionsLegalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
