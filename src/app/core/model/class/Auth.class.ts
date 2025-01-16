export class RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;

  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
  }
}

export class LoginPayload {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
