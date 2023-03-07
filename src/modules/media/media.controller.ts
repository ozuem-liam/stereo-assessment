import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  ParseUUIDPipe,
  Optional,
} from '@nestjs/common';
import { IsOptional } from 'class-validator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Repository, Like } from 'typeorm';
import { CreateMediaDto } from './dtos/create-media.dto';
import { MediaService } from './media.service';
import { UpdateMediaDto } from './dtos/update-media.dto';

@Controller('media')
export class MediaController {
  constructor(public mediaService: MediaService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createMediaDto: CreateMediaDto,
  ) {
    const { status, message, data } = await this.mediaService.createAMedia(
      createMediaDto,
      file,
    );
    if (status == 'success') {
      return {
        status,
        message,
        data,
      };
    }
    return { status, message };
  }

  @Get()
  async findAll(@Query('page') page = 1, @Query('perPage') perPage = 10) {
    const { status, message, data } = await this.mediaService.getAllMedia(
      page,
      perPage,
    );
    if (status == 'success') {
      return {
        status,
        message,
        data,
      };
    }
    return { status, message };
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async updateAMedia(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMediaDto: UpdateMediaDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { status, message, data } = await this.mediaService.updateAMediaById(
      id,
      updateMediaDto,
      file,
    );
    if (status == 'success') {
      return {
        status,
        message,
        data,
      };
    }
    return { status, message };
  }

  @Delete('/soft-delete/:id')
  async softDeleteAMedia(@Param('id', ParseUUIDPipe) id: string) {
    const { status, message, data } =
      await this.mediaService.softDeleteAMediaById(id);
    if (status == 'success') {
      return {
        status,
        message,
        data,
      };
    }
    return { status, message };
  }

  @Delete(':id')
  async deleteAMedia(@Param('id', ParseUUIDPipe) id: string) {
    const { status, message } = await this.mediaService.deleteAMediaById(id);
    if (status == 'success') {
      return {
        status,
        message,
      };
    }
    return { status, message };
  }
}
