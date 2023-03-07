import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from 'src/typeorm/entities/Media';
import { CreateMediaParams, UpdateMediaParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { SharedService } from '../shared/shared.service';
import { messages } from '../../translations/messages';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media) private mediaRepository: Repository<Media>,
    private sharedService: SharedService,
  ) {}

  async getAllMedia(page: number, perPage: number) {
    let message: string;
    try {
      const [data, total] = await this.mediaRepository.findAndCount({
        take: perPage,
        skip: (page - 1) * perPage,
      });
      message = messages['MEDIA-FETCHING-SUCCESS'];
      return {
        status: 'success',
        message,
        data: {
          page: Number(page),
          perPage: Number(perPage),
          total,
          totalPages: Math.ceil(total / perPage),
          data,
        },
      };
    } catch (error) {
      message = messages['ERROR-FETCHING-MEDIA'];
      return { status: 'error', message };
    }
  }

  async createAMedia(mediaDetails: CreateMediaParams, file: any) {
    let message: string;
    const media_url = await this.sharedService.uploadImage(file);

    if (!media_url) {
      message = messages['ERROR-UPLOADING-IMAGE'];
      return { status: 'error', message };
    }

    mediaDetails.url = media_url;
    const media = this.mediaRepository.create({
      ...mediaDetails,
      createdAt: new Date(),
    });
    message = messages['MEDIA-CREATED-SUCCESS'];
    await this.mediaRepository.save(media);
    return {
      status: 'success',
      message,
      data: media,
    };
  }

  async updateAMediaById(
    id: string,
    updateMediaDetails: UpdateMediaParams,
    file: any,
  ) {
    let message: string;
    if (file) {
      const media_url = await this.sharedService.uploadImage(file);

      if (!media_url) {
        message = messages['ERROR-UPLOADING-IMAGE'];
        return { status: 'error', message };
      }

      updateMediaDetails.url = media_url;
    }
    const updateResult = await this.mediaRepository.update(
      { id },
      { ...updateMediaDetails, ...{ updatedAt: new Date() } },
    );

    if (updateResult.affected !== 1) {
      throw new NotFoundException(`Media with ID ${id} not found`);
    }
    message = messages['MEDIA-UPDATE-SUCCESS'];
    const updatedMedia = await this.mediaRepository.findOne({ where: { id } });
    return {
      status: 'success',
      message,
      data: updatedMedia,
    };
  }

  async softDeleteAMediaById(id: string) {
    let message: string;
    const update = { isDeleted: true, deletedAt: new Date() };

    const updateResult = await this.mediaRepository.update(
      { id },
      { ...update },
    );

    if (updateResult.affected !== 1) {
      message = messages['MEDIA-DELETE-ERROR'];
      return {
        status: 'success',
        message,
      };
    }
    message = messages['MEDIA-DELETE-SUCCESS'];
    const updatedMedia = await this.mediaRepository.findOne({ where: { id } });
    return {
      status: 'success',
      message,
      data: updatedMedia,
    };
  }

  async deleteAMediaById(id: string) {
    let message: string;
    const updateResult = await this.mediaRepository.delete({ id });
    if (updateResult.affected !== 1) {
      message = messages['MEDIA-DELETE-ERROR'];
      return {
        status: 'success',
        message,
      };
    }
    message = messages['MEDIA-DELETE-SUCCESS'];
    return {
      status: 'success',
      message,
    };
  }
}
