import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isProductSideBarOpen: boolean = false;

  title = 'angularRouting';

  login() {
    localStorage.setItem('logedin', 'true')
  }
}
