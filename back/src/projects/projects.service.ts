import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { Data } from './data';

@Injectable()
export class ProjectsService {
  create(project: Project) {
    Data.projects.push(project);
  }

  findAll() {
    return Data.projects;
  }

  findOne(id: number) {
    for (const project of Data.projects) {
      if (project.id === id) {
        return project;
      }
    }
  }

  update(id: number, project: Project) {
    id--;
    Data.projects[id]['reference'] = project.reference;
    Data.projects[id]['description'] = project.description;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
