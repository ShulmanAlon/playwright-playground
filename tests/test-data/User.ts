export class User {
  constructor(
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string
  ) // TODO - add optional signup properties
  {}

  get fullName(): string {
    return `${this.firstName.toLowerCase()} ${this.lastName.toLowerCase()}`;
  }
}
