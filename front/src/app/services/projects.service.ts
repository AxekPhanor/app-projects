import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService {
  override url = 'http://localhost:3000/projects';

  findAll(){
    return this.http.get<Project>(this.url);
  }

  createProject(project: Project){
    return this.http.post<Project>(this.url, {id: project.id, reference: project.reference, description: project.description});
  }
}
