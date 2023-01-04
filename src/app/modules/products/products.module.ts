import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsSidebarComponent } from './products-sidebar/products-sidebar.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'app/shared/material.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    SidebarComponent,
    ProductsSidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
