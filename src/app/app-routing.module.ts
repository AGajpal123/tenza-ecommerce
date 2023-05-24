import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./layouts/home/home.module').then(m=>m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('./layouts/about-us/about-us.module').then((m)=>m.AboutUsModule) },
  { path: 'opportunity', loadChildren: () => import('./layouts/opportunity/opportunity.module').then(m => m.OpportunityModule) },
  { path: 'product',loadChildren:()=>import('./layouts/product/product.module').then((m)=>m.ProductModule)},
  { path: 'photo-gallery', loadChildren: () => import('./layouts/photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule) },
  { path: 'payment', loadChildren: () => import('./layouts/payment/payment.module').then(m => m.PaymentModule) },
  { path: 'contact-us', loadChildren: () => import('./layouts/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
