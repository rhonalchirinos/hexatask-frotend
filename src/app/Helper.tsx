export class AuthToken {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost/api';
  }

  header() {
    const token = localStorage.getItem('authToken');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };
  }
}
