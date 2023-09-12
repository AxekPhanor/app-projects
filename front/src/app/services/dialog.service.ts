import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  addProject() {
    this.dialog.open(DialogComponent,{
      data:{
        title: "New projects",
        content: "a new project has been created",
        buttonLabel:"return to projects list",
        style:"",
        href: "projects"
      }
    });
  }

  editProject() {
    this.dialog.open(DialogComponent,{
      data:{
        title: "Edit project",
        content: "the project has been edited",
        buttonLabel:"return to projects list",
        style:"",
        href: "projects"
      }
    });
  }

  userNotFound() {
    this.dialog.open(DialogComponent,{
      data:{
        title: "User not found",
        content: "This username doesn't exist",
        buttonLabel:"close",
        style:"red",
        href: "login"
      }
    });
  }

  custom(title: string, content: string, buttonLabel: string, style: string, href: string){
    this.dialog.open(DialogComponent,{
      data:{
        title: title,
        content: content,
        buttonLabel: buttonLabel,
        style: style,
        href: href
      }
    });
  }
}
