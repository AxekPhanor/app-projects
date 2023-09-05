import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from './../../services/login.service';
import { DialogComponent } from './dialog/dialog.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  @Input() spinner?: boolean = false;

  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private LoginService: LoginService, public dialog: MatDialog) { }

  isSpinning(spinner: boolean) {
    this.spinner = spinner;
  }

  openDialog(){
    this.dialog.open(DialogComponent);
  }

  ngOnInit() {
    this.LoginService.isDisconnected();
  }
}
