import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MaterialModule } from './shared/material.module';
import { ProductsSidebarComponent } from './modules/test/products-sidebar/products-sidebar.component';
import { HomeComponent } from './modules/test/home/home.component';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from './modules/test/sidebar/sidebar.component';
import { IconStyleDirective } from './@core/directives/icon-style.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    ProductsSidebarComponent,
    HomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    IconStyleDirective
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
export class AppModule {

  constructor(private Route: Router) {

    const replacer = (_key: any, value: { name: any; }) => typeof value === 'function' ? value.name : value;
    console.log("Routes : ", JSON.stringify(Route.config, replacer, 2));


  }

}
