import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './@core/auth/authguard.guard';
import { ChildrenguardGuard } from './@core/auth/childrenguard.guard';
import { LogingGuard } from './@core/auth/loging.guard';
import { HomeComponent } from './modules/test/home/home.component';
import { ProductDetailsComponent } from './modules/test/product-details/product-details.component';
import { ProductsSidebarComponent } from './modules/test/products-sidebar/products-sidebar.component';
import { ProductsComponent } from './modules/test/products/products.component';
import { SidebarComponent } from './modules/test/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', component: ProductsComponent,
    canActivate: [AuthguardGuard],
    canActivateChild: [ChildrenguardGuard],
    children: [
      { path: ':id', component: ProductDetailsComponent, canDeactivate: [LogingGuard] },
    ]
  },
  // { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthguardGuard] },
  { path: '', component: SidebarComponent, outlet: 'sidebar' },
  { path: 'products', component: ProductsSidebarComponent, outlet: 'sidebar' },
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
