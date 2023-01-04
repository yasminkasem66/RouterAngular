import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AuthguardGuard } from 'app/@core/auth/authguard.guard';
import { ChildrenguardGuard } from 'app/@core/auth/childrenguard.guard';
import { LogingGuard } from 'app/@core/auth/loging.guard';


const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    canActivate: [AuthguardGuard],
    canActivateChild: [ChildrenguardGuard],
    children: [
      { path: ':id', component: ProductDetailsComponent, canDeactivate: [LogingGuard] },
    ]
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
