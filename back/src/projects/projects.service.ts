import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto/project.dto';
import { Data } from './data';

@Injectable()
export class ProjectsService {
  create(projectDto: ProjectDto) {
    Data.projects.push(projectDto);
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

  update(id: number, projectDto: ProjectDto) {
    id--;
    Data.projects[id]['reference'] = projectDto.reference;
    Data.projects[id]['description'] = projectDto.description;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
