import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestContextService {
  private keys: Map<string, any>;

  constructor() {
    this.keys = new Map<string, any>();
  }

  public setKey(key: string, value: any) {
    this.keys.set(key, value);
  }

  public getKey(key: string): any {
    return this.keys.get(key);
  }
}
