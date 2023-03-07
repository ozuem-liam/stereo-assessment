import { IsOptional, IsEnum, IsString } from 'class-validator';

export enum MediaType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

export class UpdateMediaDto {
  @IsOptional()
  @IsEnum(MediaType)
  type: MediaType;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  status: 'Active' | 'Inactive';
}
