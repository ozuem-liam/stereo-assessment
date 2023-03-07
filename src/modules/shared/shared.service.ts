import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SPBadRequestException } from 'src/models/exceptions/bad-request.exception';
import { SPNotFoundException } from 'src/models/exceptions/not-found.exception';
import { CloudinaryService } from 'src/utils/cloudinary';
import * as fs from 'fs';
// import { customAlphabet } from 'nanoid';

@Injectable()
export class SharedService {
  constructor(private cloudinaryService: CloudinaryService) {}

  async imageUploader(path: string): Promise<string> {
    // upload image
    console.log({ data: path });
    const url = await this.cloudinaryService.upload(path);
    console.log({ data: url });
    // remove image from server
    fs.unlinkSync(path);
    return url;
  }

  async uploadImage(file: any | any[]): Promise<string> {
    try {
      return await this.imageUploader(file.path);
    } catch (err) {
      throw new Error(err);
    }
  }

  async queryHandler(query) {
    try {
      const data = await query;
      return { data };
    } catch (error) {
      switch (error.code || 0) {
        case 'P2025':
          throw new SPNotFoundException({});
        case 'P2012' || 'P2011' || 'P2016':
          throw new SPBadRequestException({});
        default:
          throw new InternalServerErrorException({
            message: 'An unkmown error occured',
            data: {},
            error: {},
          });
      }
    }
  }
}
