import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { LegalComponent } from './legal/legal.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    LegalComponent,
    FranchiseComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
