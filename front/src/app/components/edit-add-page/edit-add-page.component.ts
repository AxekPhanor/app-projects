import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
