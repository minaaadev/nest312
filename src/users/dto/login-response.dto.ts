import { IsString } from 'class-validator';

export class LoginResponseDto {
  @IsString()
  message:string
  @IsString()
  name:string
}