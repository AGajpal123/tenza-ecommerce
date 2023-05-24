import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LegalComponent } from './legal/legal.component';
import { FranchiseComponent } from './franchise/franchise.component';

const routes: Routes = [
  {
    path : '',
    component : AboutUsComponent
  },
  {
    path : 'legal',
    component : LegalComponent
  },
  {
    path : 'franchise',
    component : FranchiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
