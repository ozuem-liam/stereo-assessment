import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/typeorm/entities/Media';
import { SharedModule } from '../shared/shared.module';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Media]), SharedModule],
  controllers: [MediaController],
  providers: [MediaService, SharedModule],
})
export class MediaModule {}
