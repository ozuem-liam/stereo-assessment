import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import appConfig from '../configs/app.config';

@Injectable()
export class CloudinaryService {
  private cloudinary;

  constructor() {
    this.cloudinary = v2;
    this.cloudinary.config({
      cloud_name: appConfig.cloud_name,
      api_key: appConfig.api_key,
      api_secret: appConfig.api_secret,
    });
  }

  public async upload(path: any): Promise<string> {
    try {
      const uploaded = await this.cloudinary.uploader.upload(path);
      return uploaded.url;
    } catch (error) {
      console.log(error);
    }
  }
}
