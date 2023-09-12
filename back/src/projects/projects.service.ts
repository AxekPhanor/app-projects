import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Project } from './entities/project.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = await this.projectModel.create(createProjectDto);
    return project;
  }

  async findAll(): Promise<Project[]> {
    const projects = await this.projectModel.find().exec();
    if (!projects) {
      throw new NotFoundException(`Project ${projects} not found`);
    }
    return projects;
  }

  async findAllFromUser(userId: mongoose.Types.ObjectId): Promise<Project[]> {
    const projects = await this.projectModel.find({ user_id: userId }).exec();
    if (!projects) {
      throw new NotFoundException(`Projects ${projects} not found`);
    }
    return projects;
  }

  async findOne(id: string) {
    const project = await this.projectModel.findOne({ _id: id }).exec();
    if (!project) {
      throw new NotFoundException(`Project ${project} not found`);
    }
    return project;
  }

  async update(
    id: mongoose.Types.ObjectId,
    updateProjectDto: UpdateProjectDto,
  ) {
    const project = await this.projectModel.findOneAndUpdate(
      { _id: id },
      updateProjectDto,
      {
        new: true,
      },
    );
    if (!project) {
      throw new NotFoundException(`Project ${project} not found`);
    }
    return project;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
