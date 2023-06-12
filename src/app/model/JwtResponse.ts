export class JwtResponse {
  public name: string;
  public avatar: string;
  public roles: any;
  public token: string;

  constructor(name: string, avatar: string, roles: any, token: string) {
    this.name = name;
    this.avatar = avatar;
    this.roles = roles;
    this.token = token;
  }
}
