import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from 'src/app/modules/test/product-details/product-details.component';
import { DOCUMENT } from '@angular/common';

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


    // if (window.confirm('upload in progress, are you sure you want to leave? ')) {
    //    return true;
    // }
    // return component.canDeactive;

    return component.canDeactivate ? component.canDeactivate() : true


  }

}
