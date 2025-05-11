export class User {
  constructor(
    public username: string,
    public password: string,
    public firstname?: string,
    public lastname?: string,
    public zipPostal?: string
  ) {}

  get fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
