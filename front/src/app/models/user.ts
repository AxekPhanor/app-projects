export class User {
  _id?: string;
  username?: string;

  constructor(_id?: string, username?: string) {
    this._id = _id;
    this.username = username;
  };
}
