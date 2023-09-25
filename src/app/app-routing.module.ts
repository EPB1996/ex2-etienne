import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListeComponent } from './liste/liste.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [ { path: 'accueil', component: AcceuilComponent  },
{ path: 'liste', component: ListeComponent },
{ path: 'gestion', component: GestionComponent },
// Add more routes for other components as needed
{ path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
