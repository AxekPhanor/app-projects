import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  project = new Project();
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    id: [null, Validators.required],
    reference: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(private ProjectsService: ProjectsService){}

  onSubmit(){
    this.project.id = Number(sessionStorage.getItem('projectsQuantity')) + 1; // TODO: A MODIFIER PAR UN APPEL DU BACK
    this.project.reference = this.addressForm.value.reference!;
    this.project.description = this.addressForm.value.description!;
    console.log(this.project);
    this.ProjectsService.createProject(this.project).subscribe({
      next: data => {
        if(data){
          //console.log(data);
        }
      }
    });
  }

}
