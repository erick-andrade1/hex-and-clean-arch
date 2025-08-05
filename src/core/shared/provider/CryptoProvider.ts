export interface CryptoProvider {
  hash(password: string): string;
  compare(password: string, hash: string): boolean;
}
