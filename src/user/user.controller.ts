import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createuserDTO: CreateUserDTO) {}
}
