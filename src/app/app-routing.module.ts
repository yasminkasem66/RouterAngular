import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanloadGuard } from './@core/auth/canload.guard';
import { RoleGuard } from './@core/auth/role.guard';
import { HomeComponent } from './modules/test/home/home.component';
import { ProductsSidebarComponent } from './modules/test/products-sidebar/products-sidebar.component';
import { SidebarComponent } from './modules/test/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    canActivate: [RoleGuard],
    data: { role: 'admin' },
    // canLoad: [CanloadGuard]
  },

  // { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthguardGuard] },
  { path: '', component: SidebarComponent, outlet: 'sidebar' },
  { path: 'products', component: ProductsSidebarComponent, outlet: 'sidebar' },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
