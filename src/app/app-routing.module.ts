import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { SocieteComponent } from './screens/societe/societe.component';
import { ContactComponent } from './screens/contact/contact.component';
import { PrestationsComponent } from './screens/prestations/prestations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'societe', component: SocieteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'prestations', component: PrestationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
