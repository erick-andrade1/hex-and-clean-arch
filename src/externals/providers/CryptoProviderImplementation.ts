import bcrypt from 'bcrypt';
import { CryptoProvider } from '../../core';

export class CryptoProviderImplementation implements CryptoProvider {
  compare(entry: string, hash: string): boolean {
    return bcrypt.compareSync(entry, hash);
  }
  hash(entry: string): string {
    return bcrypt.hashSync(entry, 10);
  }
}
