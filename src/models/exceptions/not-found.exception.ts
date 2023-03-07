import { HttpException, HttpStatus } from '@nestjs/common';

export class SPNotFoundException extends HttpException {
  constructor({
    message = 'Resource with given detail not found',
    data = {},
    errors = {},
  }) {
    super({ message, data, errors }, HttpStatus.NOT_FOUND);
  }
}
