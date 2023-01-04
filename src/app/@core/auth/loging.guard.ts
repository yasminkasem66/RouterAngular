import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ProductDetailsComponent } from '@modules/products/product-details/product-details.component';

export interface canComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}


@Injectable({
  providedIn: 'root'
})
export class LogingGuard implements CanDeactivate<canComponentDeactivate> {

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  canDeactivate(
    component: ProductDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (window.confirm('upload in progress, are you sure you want to leave? ')) {
      return true;
    }
    return component.canDeactive;

    // return component.canDeactivate ? component.canDeactivate() : true


  }

}
