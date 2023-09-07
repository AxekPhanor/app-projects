import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('isConnected') == 'false'){
      this.redirect();
    }
  }

  redirect() {
    this.router.navigateByUrl('/login');
  }
}
