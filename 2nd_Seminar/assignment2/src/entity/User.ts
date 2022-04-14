export class User {
  public id: Number;

  public realName: string;

  public email: string;

  constructor(id: Number) {
    this.id = id;
    this.realName = "이승헌"
    this.email = "crayon@gmail.com";
  }
}