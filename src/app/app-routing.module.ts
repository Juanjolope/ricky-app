import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pagina/details/details.component';
import { LandingComponent } from './pagina/landing/landing.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
  { path: '', component: LandingComponent },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
