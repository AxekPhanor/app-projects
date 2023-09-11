import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectsService } from '../../../services/projects.service';
import { LoginService } from '../../../services/login.service';
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
    private LoginService: LoginService,
    private ProjectsService: ProjectsService,
    private DialogService: DialogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      console.log("test");
      this.getProject(id);
    }
  }

  onSubmit() {
    this.project.reference = this.addressForm.value.reference!;
    this.project.description = this.addressForm.value.description!;
    if (this.project._id == null) { //--- ADD FORM PART ---//
      this.project.user_id = this.LoginService.getUserId()!;
      console.log(this.project._id);
      this.ProjectsService.createProject(this.project).subscribe({
        next: data => {
          console.log(data);
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

  getProject(id: string) {
    this.ProjectsService.findOne(id!).subscribe({
      next: data => {
        if (data) { // TODO: REMOVE 'IF' AND CALL ERROR
          console.log(data);
          this.project._id = data._id;
          this.project.reference = data.reference;
          this.project.description = data.description;
        }
      }
    })
  }
}
