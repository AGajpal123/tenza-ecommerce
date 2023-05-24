import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    SharedModule
  ]
})
export class PhotoGalleryModule { }
