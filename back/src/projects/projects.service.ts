import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Data } from './data';

@Injectable()
export class ProjectsService {
  create(createProjectDto: CreateProjectDto) {
    console.log(createProjectDto);
    Data.projects.push(createProjectDto);
    return createProjectDto;
  }

  findAll() {
    return Data.projects;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
