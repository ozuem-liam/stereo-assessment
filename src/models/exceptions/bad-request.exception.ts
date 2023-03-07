import { HttpException, HttpStatus } from '@nestjs/common';

export class SPBadRequestException extends HttpException {
  constructor({ message = 'Invalid request', data = {}, errors = {} }) {
    super({ message, data, errors }, HttpStatus.BAD_REQUEST);
  }
}
