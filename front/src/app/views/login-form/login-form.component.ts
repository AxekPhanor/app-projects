import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

import { LoginService } from './../../services/login.service';
import { User } from './../../models/user';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() eventSpinner = new EventEmitter<boolean>();

  user = new User();
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    username: [null, Validators.required],
  });

  constructor(private LoginService: LoginService, private router: Router) { }

  onSubmit(): void {
    this.eventSpinner.emit(true);
    setTimeout(() => {
      this.getUser();
      this.eventSpinner.emit(false);
    }, 1000);

  }

  async getUser() {
    this.user.username = this.addressForm.value.username!;
    this.LoginService.getByUsername(this.user.username).subscribe({
      next: (data) => {
        if (data) {
          this.LoginService.isConnected();
          this.redirect();
        }
      },
      error: (e) => {
        if (e.status === 404) {
          //alert(e.message);
        }
      },
    });
  }

  redirect() {
    this.router.navigateByUrl('/projects');
  }
}
