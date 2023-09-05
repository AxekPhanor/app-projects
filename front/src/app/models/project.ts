export class Project {
  id?: number;
  reference?: string;
  description?: string;

  constructor(id?: number, reference?: string, description?: string) {
    this.id = id;
    this.reference = reference;
    this.description = description;
  };
}
