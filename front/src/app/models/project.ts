export class Project {
  _id?: string;
  reference?: string;
  description?: string;
  user_id?: string;

  constructor(_id?: string, reference?: string, description?: string, user_id?: string) {
    this._id = _id;
    this.reference = reference;
    this.description = description;
    this.user_id = user_id;
  };
}
