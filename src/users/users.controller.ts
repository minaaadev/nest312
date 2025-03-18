import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { User } from './entities/user.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: '회원가입', description: '새로운 사용자 생성' })
  @ApiResponse({ status: 201, description: '회원가입 성공' })
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() dto: CreateUserDto): Promise<string> {
    const { name, password } = dto;
    await this.usersService.CreateUser(name, password);
    return `회원가입이 완료되었습니다.`;
  }

  @Post('/login')
  @ApiOperation({ summary: '로그인', description: '사용자 로그인' })
  @ApiResponse({ status: 200, description: '로그인 성공', type: LoginResponseDto })
  @ApiBody({ type: LoginUserDto })
  async login(@Body() dto: LoginUserDto): Promise<string> {
    const { name, password } = dto;
    return await this.usersService.login(name, password);
  }

  @Get('/:id')
  @ApiOperation({ summary: '유저 조회', description: '특정 유저 정보 가져오기' })
  @ApiResponse({ status: 200, description: '특정 유저 정보' })
  async getUser(@Param('id') id: string) {
    return await this.usersService.getUserById(Number(id));
  }
  @Delete('/delete/:id')
  @ApiOperation({ summary: '유저 삭제', description: '특정 유저 삭제' })
  @ApiResponse({ status: 200, description: '유저 삭제 성공' })
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUser(Number(id));
  }

  @Get('sync-status')
  @ApiOperation({ summary: '동기화 상태 확인', description: '서버 동기화 상태 확인' })
  checkSynchronizer() {
    return this.usersService.synchEnabled();
  }
}
