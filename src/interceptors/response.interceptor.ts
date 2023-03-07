import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ServerResponse } from 'http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
  message: any;
  errors: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((response) => {
        const resp = context.switchToHttp().getResponse(),
          headers = resp.getHeaders();
        const content_type = headers['content-type'] || 'application/json';
        if (content_type !== 'application/json') {
          return response;
        }
        let statusCode = resp.statusCode;
        if (response?.data == null && statusCode == 500) {
          statusCode = 400;
          context.switchToHttp().getResponse().status(statusCode);
        }

        const {
          message = statusCode == 201 || statusCode == 200
            ? 'Request Succesful'
            : statusCode === 400
            ? 'Invalid Request'
            : 'An error occurred',
          status = statusCode == 201 || statusCode == 200
            ? 'success'
            : statusCode === 400
            ? 'error'
            : 'error',
          data = {},
        } = response;
        return { status, message, data };
      }),
    );
  }
}
