import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MasterHomeComponent } from './components/master-home/master-home.component';

const routes: Routes = [
  { path: '', component: MasterHomeComponent},

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
