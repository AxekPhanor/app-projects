import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

import { LoginService } from './../../../services/login.service';
import { User } from './../../../models/user';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() eventSpinner = new EventEmitter<boolean>();
  @Output() eventUserNotFound = new EventEmitter<boolean>();

  user = new User;

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    username: [null, Validators.required],
  });

  constructor(private LoginService: LoginService, private router: Router) { }

  onSubmit(): void {
    this.eventSpinner.emit(true);
    this.getUser();
  }

  async getUser() {
    this.user.username = this.addressForm.value.username!;
    console.log(this.user.username);
    this.LoginService.getByUsername(this.user.username).subscribe({
      next: (data) => {
        this.LoginService.isConnected();
        this.LoginService.setUserId(data._id!);
        console.log(data._id);
        this.redirect();
      },
      error: (e) => {
        if (e.status === 404) {
          this.eventUserNotFound.emit(true);
        }
      },
    });
  }

  redirect() {
    this.router.navigateByUrl('/projects');
  }
}
