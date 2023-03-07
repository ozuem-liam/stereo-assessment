import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    if (!value) {
      throw new BadRequestException(
        {
          errors: {},
          message: 'Invalid request, body can not be empty',
          data: {},
        },
        'Invalid Request',
      );
    }
    const object = plainToClass(metatype, value, {
      enableImplicitConversion: false,
    });
    const errors = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      validateCustomDecorators: false,
    });
    const formattedErrors = errors ? this.formatErrors(errors) : false;
    if (errors.length > 0) {
      throw new BadRequestException(
        { errors: formattedErrors, message: 'Invalid request', data: {} },
        'Invalid Request',
      );
    }
    return value;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private formatErrors(errors) {
    const formattedErrors = {};
    for (const err of errors) {
      const messages = err.constraints
        ? Object.values(err.constraints)
        : err.children.length
        ? Object.values(err.children[0].constraints)
        : [''];
      formattedErrors[err.property] = messages[0];
    }
    return formattedErrors;
  }
}
