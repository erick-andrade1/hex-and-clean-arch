import jwt from 'jsonwebtoken';
import { TokenProvider } from '../../core';

export class TokenProviderImplementation extends TokenProvider {
  private readonly secret: string;

  constructor(secret: string) {
    super();
    this.secret = secret;
  }

  generateToken(userId: string): string {
    return jwt.sign({ userId }, this.secret);
  }

  verifyToken(token: string): string | object {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      return null;
    }
  }

  decodeToken(token: string): any {
    return jwt.decode(token);
  }
}
