import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-edit-add-page',
  templateUrl: './edit-add-page.component.html',
  styleUrls: ['./edit-add-page.component.css']
})
export class EditAddPageComponent {

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
