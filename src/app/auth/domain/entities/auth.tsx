export class Auth {
  email!: string;
  password!: string;
}

export class Register {
  email!: string;
  password!: string;
  fullName!: string;
}

export class Token {
  token!: string;

  // add cosntrcutor
  constructor(token: string) {
    this.token = token;
  }
}
