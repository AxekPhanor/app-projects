import { Component, Input } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { LoginService } from '../../../services/login.service';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  projects: Project[] = [];

  constructor(private router: Router, private ProjectsService: ProjectsService, private LoginService: LoginService){}

  ngOnInit() {
    this.ProjectsService.findAllFromUser(this.LoginService.getUserId()!).subscribe({
      next: (data: any) => {
        if(data) {
          this.projects = data;
        }
      }
    });
  }

  navigateToForm(){
    this.router.navigateByUrl('/edit-add');
  }
}
