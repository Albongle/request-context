import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  private keys: Map<string, any>;
  private static context: RequestContextService;

  constructor() {
    if (RequestContextService.context) {
      return RequestContextService.context;
    }
    this.keys = new Map<string, any>();
    RequestContextService.context = this;
    Object.freeze(RequestContextService.context);

    return RequestContextService.context;
  }

  public setKey(key: string, value: any) {
    this.keys.set(key, value);
  }

  public getKey(key: string): any {
    return this.keys.get(key);
  }
}
