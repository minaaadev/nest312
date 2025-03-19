import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'Kim', description: '사용자 이름' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'pw123', description: '비밀번호' })
  @IsString()
  password: string;
}
