import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { SocieteComponent } from './screens/societe/societe.component';
import { ContactComponent } from './screens/contact/contact.component';
import { TransfertsComponent } from './screens/transferts/transferts.component';
import { ParticuliersComponent } from './screens/particuliers/particuliers.component';
import { TransportsComponent } from './screens/transports/transports.component';
import { GardeMeubleComponent } from './screens/garde-meuble/garde-meuble.component';
import { QualiteComponent } from './screens/qualite/qualite.component';
import { MentionsLegalesComponent } from './screens/mentions-legales/mentions-legales.component';
import { DevisComponent } from './screens/devis/devis.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'societe', component: SocieteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'transferts', component: TransfertsComponent },
  { path: 'particuliers', component: ParticuliersComponent },
  { path: 'transports', component: TransportsComponent },
  { path: 'garde-meuble', component: GardeMeubleComponent },
  { path: 'qualite', component: QualiteComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'devis', component: DevisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
