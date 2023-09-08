import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from './../../services/login.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() spinner: boolean = false;

  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private LoginService: LoginService,
    private DialogService: DialogService,
    public dialog: MatDialog) { }

  isSpinning(spinner: boolean) {
    this.spinner = spinner;
  }

  openDialog(){
    this.DialogService.userNotFound();
  }

  ngOnInit() {
    this.LoginService.isDisconnected();
  }
}
