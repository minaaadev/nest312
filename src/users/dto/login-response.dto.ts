import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: '로그인 성공', description: '로그인 완료 메시지' })
  message: string;

  @ApiProperty({ example: 'Kim', description: '사용자 이름' })
  name: string;

  constructor(message: string, name: string) {
    this.message = message;
    this.name = name;
  }
}