export interface CryptoProvider {
  encrypt(data: string): Promise<string>;
  decrypt(data: string): Promise<string>;
  hash(data: string): Promise<string>;
  compare(data: string, hash: string): Promise<boolean>;
}
