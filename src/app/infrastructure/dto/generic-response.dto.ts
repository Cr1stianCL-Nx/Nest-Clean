import { ApiProperty } from '@nestjs/swagger';
export class GenericResponseDto<T> {
  @ApiProperty({ example: 'success' })
  status: string;
  payload: T;
}
