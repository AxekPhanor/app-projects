import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user = new User();
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    username: [null, Validators.required],
  });

  constructor(private LoginService: LoginService, private router: Router) { }

  onSubmit(): void {
    this.user.username = this.addressForm.value.username!;
    this.LoginService.getByUsername(this.user.username).subscribe(data => {
      if (data) {
        console.log('user found');
        this.LoginService.isConnected = true;
        this.redirectFunction();
      }
    })
  }

  redirectFunction() {
    this.router.navigateByUrl('/projects');
  }
}
