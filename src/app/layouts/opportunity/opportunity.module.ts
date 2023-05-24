import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OpportunityComponent
  ],
  imports: [
    CommonModule,
    OpportunityRoutingModule,
    SharedModule
  ]
})
export class OpportunityModule { }
