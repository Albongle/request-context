import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestContextService } from './request-context.service';

@Injectable()
export class RequestContextInterceptor implements NestInterceptor {
  constructor(private readonly contextService: RequestContextService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    for (const key in request?.headers) {
      if (Object.prototype.hasOwnProperty.call(request?.headers, key)) {
        const value = request?.headers[key];
        this.contextService.setKey(key, value);
      }
    }

    return next.handle();
  }
}
