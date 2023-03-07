import { Module } from '@nestjs/common';
import { CloudinaryService } from 'src/utils/cloudinary';
import { SharedService } from './shared.service';

@Module({
  controllers: [],
  providers: [SharedService, CloudinaryService],
  exports: [SharedService],
  imports: [],
})
export class SharedModule {}
