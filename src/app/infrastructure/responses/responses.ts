import { Injectable } from '@nestjs/common';
import { MSResponse } from 'src/app/domain/enum/http-code-parsers.enum';

@Injectable()
export class Responses {
  buildSuccessResponse<T>(payload: T) {
    return {
      status: MSResponse[MSResponse.success],
      payload,
    };
  }

  buildErrorResponse<T>(payload: T) {
    return {
      status: MSResponse[MSResponse.error],
      payload,
    };
  }
}
