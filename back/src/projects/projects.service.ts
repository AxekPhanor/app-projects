import { Injectable } from '@nestjs/common';
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
    return this.projectModel.find().exec();
  }

  async findAllFromUser(userId: mongoose.Types.ObjectId): Promise<Project[]> {
    return this.projectModel.find({ user_id: userId }).exec();
  }

  async findOne(id: string) {
    return this.projectModel.findOne({ _id: id }).exec();
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
    return project;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
