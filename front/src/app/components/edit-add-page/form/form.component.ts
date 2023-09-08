import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectsService } from '../../../services/projects.service';
import { DialogService } from '../../../services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  project = new Project();

  private fb = inject(FormBuilder); //creation du formulaire
  addressForm = this.fb.group({
    id: [null, Validators.required],
    reference: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(
    private ProjectsService: ProjectsService,
    private DialogService: DialogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.project.id == null){
      this.getProject();
    }
  }

  onSubmit() {
    this.project.reference = this.addressForm.value.reference!;
    this.project.description = this.addressForm.value.description!;
    if (this.project.id == null) { //--- ADD FORM PART ---//
      this.project.id = Number(sessionStorage.getItem('projectsQuantity')) + 1; // TODO: A MODIFIER PAR UN APPEL DU BACK
      this.ProjectsService.createProject(this.project).subscribe({
        next: data => {
          this.DialogService.addProject();
        }
      });
    }else { //--- EDIT FORM PART ---//
      this.ProjectsService.updateProject(this.project).subscribe({
        next: data => {
          this.DialogService.editProject();
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }

  getProject() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ProjectsService.getById(id).subscribe({
      next: data => {
        if (data) { // TODO: REMOVE 'IF' AND CALL ERROR
          this.project.id = data.id;
          this.project.reference = data.reference;
          this.project.description = data.description;
        }
      }
    })
  }
}
