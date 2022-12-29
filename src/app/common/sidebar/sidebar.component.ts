import { Direction } from '@angular/cdk/bidi';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

const Small_Width_Breakpoint = 720;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isScreenSmall!: boolean;
  isDarkTheme: boolean = false;
  dir: Direction = 'ltr';
  @ViewChild('drawer') sidenav!: MatSidenav;

  constructor(
    private breakPontObserver: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit(): void {
    // .observe([Breakpoints.XSmall])
    this.breakPontObserver
      .observe(`(max-width:${Small_Width_Breakpoint}px)`)
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  }

}
