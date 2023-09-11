import { Component, Input } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-projects';
  @Input() loginState?: boolean;
  constructor(public LoginService: LoginService){}
  ngOnInit() {
    this.loginState = (this.LoginService.getState() === 'true') ? true : false;
  }
}
