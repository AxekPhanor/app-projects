import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService {
  override url = 'http://localhost:3000/projects';

  findOne(_id: string){
    return this.http.get<Project>(this.url+'/'+_id)
  }

  findAllFromUser(userId: string){
    return this.http.get<Project>(this.url+'/user='+userId);
  }

  createProject(project: Project){
    return this.http.post<Project>(this.url, {reference: project.reference, description: project.description, user_id: project.user_id});
  }

  updateProject(project: Project){
    return this.http.patch<Project>(this.url+'/'+project._id, {reference: project.reference, description: project.description, user_id: project.user_id});
  }
}
