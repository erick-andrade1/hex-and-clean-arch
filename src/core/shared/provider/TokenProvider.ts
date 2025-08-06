export abstract class TokenProvider {
  abstract generateToken(userId: string): string;
  abstract verifyToken(token: string): string | object;
  abstract decodeToken(token: string): any;
}
