import { Injectable } from '@nestjs/common';
import { RequestContextService } from './request-context/request-context.service';

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(private readonly requestConext: RequestContextService) {}
  getHello(): string {
    console.log(this.requestConext.getKey('authorization'));

    return 'Hello World!';
  }
}
