import { IsEmpty, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';

export enum MediaType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

export class CreateMediaDto {
  @IsEnum(MediaType)
  @IsNotEmpty()
  type: MediaType;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['Active', 'Inactive'])
  @IsNotEmpty()
  status: 'Active' | 'Inactive';
}
