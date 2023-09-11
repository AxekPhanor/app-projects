import { Types } from 'mongoose';

export class CreateProjectDto {
  reference: string;
  description: string;
  user_id: Types.ObjectId;
}
