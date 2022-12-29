import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/test/home/home.component';
import { ProductDetailsComponent } from './modules/test/product-details/product-details.component';
import { ProductsComponent } from './modules/test/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent, outlet: 'prdouctRoute' },
  { path: 'product/:id', component: ProductDetailsComponent, outlet: 'prdouctRoute' },
  { path: '**', redirectTo: '' },

  // {
  //   path: '',
  //   loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
