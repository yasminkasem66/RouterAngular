import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MaterialModule } from './shared/material.module';
import { ProductsComponent } from './modules/test/products/products.component';
import { ProductDetailsComponent } from './modules/test/product-details/product-details.component';
import { ProductsSidebarComponent } from './modules/test/products-sidebar/products-sidebar.component';
import { HomeComponent } from './modules/test/home/home.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './modules/test/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    SidebarComponent,
    ProductsSidebarComponent,
    HomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
