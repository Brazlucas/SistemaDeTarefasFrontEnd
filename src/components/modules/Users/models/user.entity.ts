export class User {
  public id: number;

  public name: string;

  public email: string;

  constructor(data: any = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
  }
}