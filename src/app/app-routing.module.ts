import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import { KamauComponent } from './components/kamau/kamau.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {FilterComponent} from "./components/filter/filter.component";

const routes: Routes = [
  { path: '', component: FilterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'kamau', component: KamauComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
