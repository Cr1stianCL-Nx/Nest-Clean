import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly adapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    Logger.error(`EXCEPTION:::${exception}`, 'HttpExceptionFilter:::catch');

    let status: number;
    if (
      exception &&
      Object.keys(exception).length !== 0 &&
      Object.getPrototypeOf(exception) !== Object.prototype
    ) {
      status = exception.getStatus();
    }
    const adapter = this.adapterHost.httpAdapter;

    Logger.debug({
      module: 'HttpExceptionFilter',
      method: 'catch',
      description: 'generic error pokemon',
      message: JSON.stringify({ exception }),
    });
    adapter.reply(response, exception, status);
  }
}
