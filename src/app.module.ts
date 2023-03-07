import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaModule } from './modules/media/media.module';
import { Media } from './typeorm/entities/Media';
import { MediaService } from './modules/media/media.service';
import { SharedService } from './modules/shared/shared.service';
import { SharedModule } from './modules/shared/shared.module';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryService } from './utils/cloudinary';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Willi@ms1996',
      database: 'stereo_database',
      entities: [Media],
      synchronize: true,
    }),
    MulterModule.register({ dest: './uploads' }),
    SharedModule,
    MediaModule,
  ],
  controllers: [],
  providers: [SharedService, CloudinaryService],
})
export class AppModule {}
