export interface CryptoProvider {
  hash(data: string): string;
  compare(data: string, hash: string): boolean;
}
